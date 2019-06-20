import moment from "moment";

export const convertFromJiraToLeadtime = (data) => {
  let dateEntries = [];
  const periodStartDate = data.issues
    .map((issue) => new moment(issue.fields.created, 'YYYY-MM-DD'))
    .sort((a, b) => a - b)[0];

  const periodEndDates = data.issues.map((issue) => issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate, 'YYYY-MM-DD') : new moment());//'YYYY-MM-DDTHH:mm:ss.SSSSZ'

  const periodEndDatesSorted = periodEndDates.sort((a, b) => b - a);
  const periodEndDate = periodEndDatesSorted[0];

  const issues = data.issues.map(issue => {
    return {
      key: issue.key,
      creationDate: new moment(issue.fields.created, 'YYYY-MM-DD'),
      resolvedDate: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate, 'YYYY-MM-DD') : undefined,
      leadTime: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate, 'YYYY-MM-DD').diff(new moment(issue.fields.created, 'YYYY-MM-DD'), 'days') : undefined
    }
  });

  while (periodStartDate.diff(periodEndDate) <= 0) {
    const currentLeadTime = getAverageLeadTime(issues, periodStartDate);
    dateEntries.push(
      {
        "date": periodStartDate.format('YYYY-MM-DD'),
        "averageLeadTime": currentLeadTime
      });
    periodStartDate.add(1, 'd')

  }
  return dateEntries;
};

const average = arr => arr.length ? arr.reduce((l, r) => l + r, 0) / arr.length : 0;

const getAverageLeadTime = (issues, date) => {
  const leadTimes = issues
    .filter(issue => issue.resolvedDate && issue.resolvedDate <= date)
    .map(issue => issue.leadTime);
  return average(leadTimes)
};
