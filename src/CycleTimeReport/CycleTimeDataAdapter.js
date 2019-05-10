import moment from "moment";

export function InvalidDataError(message){
  this.message = message;
}

//Need to artificially add first status to each one?
export function issueToCycleTimeDatePair(issue, startStatus, endStatus){
  let startDate = undefined;
  let endDate = undefined;
  returnHistoriesWithAddedHistoryForIssueCreation(issue).forEach(history => {
    history.items.forEach( item => {
        if(item.toString === startStatus && !startDate){
          startDate = moment(history.created, 'YYYY-MM-DD');
        }
        else if(item.toString === endStatus){
          endDate = moment(history.created, 'YYYY-MM-DD');
        }
      }
    )
  });
  if(startStatus !== endStatus && startDate && endDate && endDate.isSameOrAfter(startDate) ){
    return {date: endDate.toISOString(true).split("T")[0], cycleTime: endDate.diff(startDate, 'days')}; //TODO: toISOString vs toLocaleString?
  }
  else{
    throw new InvalidDataError("")
  }

  function returnHistoriesWithAddedHistoryForIssueCreation(issue){
    const firstStatus = issue.changelog.histories.flatMap(history => history.items).find(item => item.field === "status").fromString;
    if(firstStatus){
      const dummyHistory = {
        created: moment(issue.fields.created, 'YYYY-MM-DD'),
        items: [{
          field: "status",
          fieldtype: "jira",
          toString: firstStatus
        }]
      };
      return [dummyHistory, ...issue.changelog.histories]
    }
    else{
      throw new Error("No issue transitions ever recorded");
    }
  }
}

export function calculateCycleTimeDataPoints(issues, issueTypeToStartEndStatusMap){
    return issues.reduce((result, issue) =>
    {
      const startStatus = issueTypeToStartEndStatusMap[issue.fields.issuetype.name].startStatus;
      const endStatus = issueTypeToStartEndStatusMap[issue.fields.issuetype.name].endStatus;
      try{
        result.push(issueToCycleTimeDatePair(issue, startStatus, endStatus));
      }catch(InvalidDataError){
        //return add nothing
      }
      return result;
    }, [])
}

export function calculateCycleTime(issues, issueTypeToStartEndStatusMap){
  const cycleTimeDataPoints = calculateCycleTimeDataPoints(issues, issueTypeToStartEndStatusMap).sort((a,b) => a.date.isBefore(b.date) ? -1 : 1);
  const dateCounter = cycleTimeDataPoints[0].date;
  const endDate = cycleTimeDataPoints[cycleTimeDataPoints.length-1].date;
  const result = [];

  while (dateCounter.isSameOrBefore(endDate)) {
    const currentCycleTime = getAverageCycleTime(cycleTimeDataPoints, dateCounter);
    result.push(
      {
        "date": dateCounter.format('YYYY-MM-DD'),
        "averageLeadTime": currentCycleTime
      });
    dateCounter.add(1, 'd')
  }
  return result;
}

const average = arr => arr.length ? arr.reduce((l, r) => l + r, 0) / arr.length : 0;

const getAverageCycleTime = (cycleTimeDataPoints, date) => {
  const cycleTimes = cycleTimeDataPoints
    .filter(dataPoint => dataPoint.date && dataPoint.date <= date)
    .map(dataPoint => dataPoint.cycleTime);
  return average(cycleTimes)
};



