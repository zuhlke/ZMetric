import {getThroughput} from "../DataFetcher";
import {
    generateTrendLineDays,
    generateTrendLineDays2,
    generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced,
    generateTrendLineTimestamp,
} from "./TrendLine";

const throughputData = [
    {
        "date": "2019-02-01",
        "throughput":1
    },
    {
        "date": "2019-02-02",
        "throughput":1.5
    },
    {
        "date": "2019-02-03",
        "throughput":3
    },
    {
        "date": "2019-02-04",
        "throughput":4
    },
    {
        "date": "2019-02-05",
        "throughput":3
    },
    {
        "date": "2019-02-06",
        "throughput":6
    },
    {
        "date": "2019-02-07",
        "throughput":6.7
    },
    {
        "date": "2019-02-08",
        "throughput":7.7
    },
    {
        "date": "2019-02-09",
        "throughput":7.2
    },
    {
        "date": "2019-02-10",
        "throughput":8
    },
];

describe("TrendLine", () => {
    it("check two methods for calculating trend line return the same result with mocked data", () => {
        const trendData = generateTrendLineDays(throughputData, "throughput");
        const secondTrendData = generateTrendLineTimestamp(throughputData, "throughput");
        trendData.map( (dataPoint, index) => {
                return expect(dataPoint.date).toEqual(secondTrendData[index].date) && expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
    });

    it("check another pair of methods for calculating trend line return the same result with mocked data", () => {
        const trendData = generateTrendLineDays(throughputData, "throughput");
        const secondTrendData = generateTrendLineDays2(throughputData, "throughput");
        trendData.map( (dataPoint, index) => {
            return expect(dataPoint.date).toEqual(secondTrendData[index].date) && expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
    });

    it("check a third pair of methods for calculating trend line return the same result with mocked data", () => {
        const trendData = generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced(throughputData, "throughput");
        const secondTrendData = generateTrendLineTimestamp(throughputData, "throughput");
        trendData.map( (dataPoint, index) => {
            return expect(dataPoint.date).toEqual(secondTrendData[index].date) && expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
    });

    it( "check two methods for calculating trend line return the same result with real (still mocked atm) data", () => {
        const trendData = generateTrendLineDays(getThroughput(), "throughput");
        const secondTrendData = generateTrendLineTimestamp(getThroughput(), "throughput");
        trendData.map( (dataPoint, index) => {
            return expect(dataPoint.date).toEqual(secondTrendData[index].date) && expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
    });

    it("check another pair of methods for calculating trend line return the same result with real (still mocked atm) data", () => {
        const trendData = generateTrendLineDays(getThroughput(), "throughput");
        const secondTrendData = generateTrendLineDays2(getThroughput(), "throughput");
        trendData.map( (dataPoint, index) => {
            return expect(dataPoint.date).toEqual(secondTrendData[index].date) && expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
    });

    it( "check a third pair of methods for calculating trend line return the same result with real (still mocked atm) data", () => {
        const trendData = generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced(getThroughput(), "throughput");
        const secondTrendData = generateTrendLineTimestamp(getThroughput(), "throughput");
        trendData.map( (dataPoint, index) => {
            return expect(dataPoint.date).toEqual(secondTrendData[index].date) && expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
    });
});
