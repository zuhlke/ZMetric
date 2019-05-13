import moment from "moment";
import {calculateFullDataSetForLeadOrCycleTime} from "./LeadTimeDataAdapter";

export function InvalidDataError(message){
  this.message = message;
}

export function calculateCycleTime(issues, issueTypeToStartEndStatusMap) {
  const dataPoints = calculateCycleTimeDataPoints(issues, issueTypeToStartEndStatusMap);
  const periodEndDate = issues.some(issue => !issue.fields.resolutiondate) ? moment() : moment(dataPoints.sort((a,b) => moment(a.date).isBefore(b.date) ? -1 : 1)[dataPoints.length-1].date);
  return calculateFullDataSetForLeadOrCycleTime(dataPoints, periodEndDate,"cycleTime");
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

export function issueToCycleTimeDatePair(issue, startStatus, endStatus){
  let startDate = undefined;
  let endDate = undefined;
  returnHistoriesWithAddedHistoryForIssueCreation(issue).forEach(history => {
    history.items.forEach( item => {
        if(item.toString === startStatus && !startDate){
          startDate = moment(history.created, 'YYYY-MM-DD');
        }
        else if(item.fromString === endStatus){
          endDate = moment(history.created, 'YYYY-MM-DD');
        }
      }
    )
  });
  if(startDate && endDate && endDate.isSameOrAfter(startDate) ){
    return {date: endDate.toISOString(true).split("T")[0], metricValue: endDate.diff(startDate, 'days')}; //TODO: toISOString vs toLocaleString?
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
