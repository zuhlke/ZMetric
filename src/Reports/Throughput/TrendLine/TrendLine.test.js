import {
  generateTrendLineDays,
  generateTrendLineDays2,
  generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced,
  generateTrendLineTimestamp,
} from "./TrendLine";

const throughputData = [
  {
    "date": "2019-02-01",
    "throughput": 1
  },
  {
    "date": "2019-02-02",
    "throughput": 1.5
  },
  {
    "date": "2019-02-03",
    "throughput": 3
  },
  {
    "date": "2019-02-04",
    "throughput": 4
  },
  {
    "date": "2019-02-05",
    "throughput": 3
  },
  {
    "date": "2019-02-06",
    "throughput": 6
  },
  {
    "date": "2019-02-07",
    "throughput": 6.7
  },
  {
    "date": "2019-02-08",
    "throughput": 7.7
  },
  {
    "date": "2019-02-09",
    "throughput": 7.2
  },
  {
    "date": "2019-02-10",
    "throughput": 8
  },
];

const throughputData2 = [
  {
    "date": "2019-02-01",
    "throughput": 1
  },
  {
    "date": "2019-02-02",
    "throughput": 3
  },
  {
    "date": "2019-02-03",
    "throughput": 4
  },
  {
    "date": "2019-02-04",
    "throughput": 2
  },
  {
    "date": "2019-02-05",
    "throughput": 5
  },
  {
    "date": "2019-02-06",
    "throughput": 2
  },
  {
    "date": "2019-02-07",
    "throughput": 4
  },
  {
    "date": "2019-02-08",
    "throughput": 7
  },
  {
    "date": "2019-02-09",
    "throughput": 5
  },
  {
    "date": "2019-02-10",
    "throughput": 4
  },
  {
    "date": "2019-02-11",
    "throughput": 1
  },
  {
    "date": "2019-02-12",
    "throughput": 4
  }
];

describe("TrendLine", () => {
  const dataSets = [throughputData, throughputData2];
  const functions = [generateTrendLineTimestamp, generateTrendLineDays, generateTrendLineDays2, generateTrendLineDaysIfDataSetOrderedAndRegularlySpaced];

  dataSets.forEach((dataset, dataIndex) => {

    functions.slice(0, functions.length - 1).forEach((fn, index) => {
      const nextFunction = functions[index + 1];
      it(fn.name + " and " + nextFunction.name + " return the same result with dataset " + (dataIndex + 1) + ".", () => {
        const trendData = fn(dataset, "throughput");
        const secondTrendData = nextFunction(dataset, "throughput");
        trendData.map((dataPoint, index) => {
          return expect(dataPoint.date).toEqual(secondTrendData[index].date) &&
            expect(dataPoint.throughput).toBeCloseTo(secondTrendData[index].throughput);
        })
      });
    });
  });
});
