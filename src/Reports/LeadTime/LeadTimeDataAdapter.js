import moment from "moment";

export const convertFromJiraToLeadtime = (data) => {
  const issues = data.issues.filter(issue => issue.fields.resolutiondate).map(issue => {
    return {
      date: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate, 'YYYY-MM-DD') : undefined,
      metricValue: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate, 'YYYY-MM-DD').diff(new moment(issue.fields.created, 'YYYY-MM-DD'), 'days') : undefined
    }
  });
  const periodEndDate = data.issues
    .map((issue) => issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate) : new moment())
    .sort((a, b) => b - a)[0];

  return (issues && issues.length > 0) ? calculateFullDataSetForLeadOrCycleTime(issues, periodEndDate, "averageLeadTime") : [];
};

export function calculateFullDataSetForLeadOrCycleTime(dataPoints, periodEndDate, metricName) {
  const dateCounter = moment(dataPoints.sort((a,b) => moment(a.date).isBefore(b.date) ? -1 : 1)[0].date);
  const dateEntries = [];

  while (dateCounter.isSameOrBefore(periodEndDate)) {
    const currentMetricValue = getAverageLeadOrCycleTime(dataPoints, dateCounter);
    dateEntries.push(
      {
        "date": dateCounter.format('YYYY-MM-DD'),
        [metricName]: currentMetricValue
      });
    dateCounter.add(1, 'd')
  }
  return dateEntries;

  function getAverageLeadOrCycleTime(dataPoints, date) {
    const average = arr => arr.length ? arr.reduce((l, r) => l + r, 0) / arr.length : 0;
    const metricValues = dataPoints
      .filter(dataPoint => dataPoint.date && moment(dataPoint.date).isSameOrBefore(date))
      .map(dataPoint => dataPoint.metricValue);
    return average(metricValues)
  }
}





