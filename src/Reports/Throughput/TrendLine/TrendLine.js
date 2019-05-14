import regression from 'regression';
import moment from "moment";


//Unix seconds and high precision linear regression
export function generateTrendLineTimestamp(data, propertyName) {
  const dataAsArrayWithTimestamp = data.map(entry => [moment(entry.date).unix(), entry[propertyName]]);
  const regressionObj = regression.linear(dataAsArrayWithTimestamp, {order: 3, precision: 8});
  return regressionObj.points.map((dataPoint, index) => {
    return {
      date: moment.unix(dataPoint[0]).toISOString().split('T')[0],
      [propertyName]: data[index][propertyName],
      trend: dataPoint[1]
    }
  })
}

export function generateTrendLineDays(data, propertyName) {
  const earliestDate = moment.min(data.map(dataPoint => moment(dataPoint.date)));
  const dataAsArrayWithDays = data.map(dataPoint => {
    return [moment(dataPoint.date).diff(earliestDate, "days"), dataPoint[propertyName]]
  });
  const regressionObj = regression.linear(dataAsArrayWithDays, {order: 2, precision: 3});
  return regressionObj.points.map((dataPoint, index) => {
    return {
      date: earliestDate.clone().add(dataPoint[0], "days").toISOString().split('T')[0],
      [propertyName]: data[index][propertyName],
      trend: dataPoint[1]
    }
  })
}

export function generateTrendLineDays2(data, propertyName) {
  const earliestDate = moment.min(data.map(dataPoint => moment(dataPoint.date)));
  const dataAsArrayWithDays = data.map(dataPoint => {
    return [moment(dataPoint.date).diff(earliestDate, "days"), dataPoint[propertyName]];
  });
  const regressionObj = regression.linear(dataAsArrayWithDays, {order: 2, precision: 3});
  return regressionObj.points.map((dataPoint, index) => {
    return {date: data[index].date, [propertyName]: data[index][propertyName], trend: dataPoint[1]}
  })
}

//Should be fastest
export function generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced(data, propertyName) {
  const dataAsArrayWithDays = data.map((dataPoint, index) => {
    return [index, dataPoint[propertyName]]
  });
  const regressionObj = regression.linear(dataAsArrayWithDays, {order: 2, precision: 3});
  return regressionObj.points.map((dataPoint, index) => {
    return {date: data[index].date, [propertyName]: data[index][propertyName], trend: dataPoint[1]}
  })
}

export const generateTrendLineData = (data, propertyName) => generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced(data, propertyName);







