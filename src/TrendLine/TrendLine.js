import regression from 'regression';
import moment from "moment";


//Unix seconds and high precision linear regression
export function generateTrendLineTimestamp(data, propertyName) {
    const dataAsArrayWithTimestamp = data.map(entry => [moment(entry.date).unix(), entry[propertyName]]);
    const regressionObj = regression.linear(dataAsArrayWithTimestamp, {order: 3, precision:8});
    const dataSet = regressionObj.points.map(dataPoint => {
        return {date: moment.unix(dataPoint[0]).toISOString().split('T')[0], [propertyName]: dataPoint[1]}
    });
    return dataSet
}

export function generateTrendLineDays(data, propertyName) {
    const earliestDate = moment.min(data.map(dataPoint => moment(dataPoint.date)));
    const dataAsArrayWithDays = data.map( dataPoint => {
        return [moment(dataPoint.date).diff(earliestDate, "days"), dataPoint[propertyName]]
    });
    const regressionObj = regression.linear(dataAsArrayWithDays, {order: 2, precision:3});
    return regressionObj.points.map( dataPoint => {
        return {date: earliestDate.clone().add(dataPoint[0], "days").toISOString().split('T')[0], [propertyName]: dataPoint[1]}
    })
}

export function generateTrendLineDays2(data, propertyName) {
    const earliestDate = moment.min(data.map(dataPoint => moment(dataPoint.date)));
    const dataAsArray = data.map(data => [data.date, data[propertyName]]);
    const dataAsArrayWithDays = dataAsArray.map( dataPoint => {
        return [moment(dataPoint[0]).diff(earliestDate, "days"), dataPoint[1]];
    });
    const regressionObj = regression.linear(dataAsArrayWithDays, {order: 2, precision:3});
    return regressionObj.points.map( (dataPoint, index) => {
        return {date: dataAsArray[index][0], [propertyName]: dataPoint[1]}
    })
}

//Should be fastest
export function generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced(data, propertyName) {
    const dataAsArray = data.map(data => [data.date, data[propertyName]]);
    const dataAsArrayWithDays = dataAsArray.map((dataPoint,index) => {
        return [index, dataPoint[1]]
    });
    const regressionObj = regression.linear(dataAsArrayWithDays, {order: 2, precision:3});
    return regressionObj.points.map( (dataPoint, index) => {
        return {date: dataAsArray[index][0], [propertyName]: dataPoint[1]}
    })
}








