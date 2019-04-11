import regression from 'regression';
import moment from "moment";


export const convertThroughputDataToTrendLineData = data => generateTrendLineDataSet(convertThroughputToPureData(data));
const convertThroughputToPureData = data => data.map(entry => [moment(entry.date).unix(), entry.throughput]);
const generateTrendLineDataSet = data => regression.linear(data).points.map(datapoint => {
    return {date: moment.unix(datapoint[0]), throughput: datapoint[1]}
});


