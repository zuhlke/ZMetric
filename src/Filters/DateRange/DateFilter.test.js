import {
  applyDateRangeFilter,
  applyDateRangeFilterToDataNestedInListOfObjects,
  dateInDateRange,
  parseDateRangeToStartAndEndDates
} from "./DateFilter";

const data = [
  {
    "date": "2019-02-01",
    "averageLeadTime": 0,
    "averageCycleTime": 0
  },
  {
    "date": "2019-02-02",
    "averageLeadTime": 1,
    "averageCycleTime": 0,
  },
  {
    "date": "2019-02-03",
    "averageLeadTime": 1,
    "averageCycleTime": 1
  },
  {
    "date": "2019-02-04",
    "averageLeadTime": 3,
    "averageCycleTime": 2
  },
  {
    "date": "2019-02-05",
    "averageLeadTime": 2,
    "averageCycleTime": 1
  },
  {
    "date": "2019-02-06",
    "averageLeadTime": 3,
    "averageCycleTime": 2
  },
  {
    "date": "2019-02-07",
    "averageLeadTime": 5,
    "averageCycleTime": 3
  },
  {
    "date": "2019-02-08",
    "averageLeadTime": 4,
    "averageCycleTime": 4
  }
];

const expectedFilteredData = [
  {
    "date": "2019-02-02",
    "averageLeadTime": 1,
    "averageCycleTime": 0,
  },
  {
    "date": "2019-02-03",
    "averageLeadTime": 1,
    "averageCycleTime": 1
  },
  {
    "date": "2019-02-04",
    "averageLeadTime": 3,
    "averageCycleTime": 2
  },
  {
    "date": "2019-02-05",
    "averageLeadTime": 2,
    "averageCycleTime": 1
  },
  {
    "date": "2019-02-06",
    "averageLeadTime": 3,
    "averageCycleTime": 2
  }
];

describe("DateFilter", () => {
  it("applyDateRangeFilter", () => {
    const filteredData = applyDateRangeFilter("02-02-2019 - 06-02-2019", data);
    expect(filteredData).toEqual(expectedFilteredData);
  });

  it("dateInDateRange correctly identifies date inside date range", () => {
    const dateRange = "01-02-2019 - 08-02-2019";
    const date = "2019-02-05";
    expect(dateInDateRange(date, dateRange)).toBe(true);
  });

  it("dateInDateRange correctly identifies date at start of date range as inside date range", () => {
    const dateRange = "01-02-2019 - 08-02-2019";
    const date = "2019-02-01";
    expect(dateInDateRange(date, dateRange)).toBe(true);
  });

  it("dateInDateRange correctly identifies date on month outside date range", () => {
    const dateRange = "01-02-2019 - 08-02-2019";
    const date = "2019-03-02";
    expect(dateInDateRange(date, dateRange)).toBe(false);
  });

  it("dateInDateRange correctly identifies date one day outside date range", () => {
    const dateRange = "01-02-2019 - 08-02-2019";
    const date = "2019-02-09";
    expect(dateInDateRange(date, dateRange)).toBe(false);
  });

  it("dateInDateRange correctly identifies date one year outside date range", () => {
    const dateRange = "01-02-2019 - 08-02-2019";
    const date = "2018-02-05";
    expect(dateInDateRange(date, dateRange)).toBe(false);
  });

  it("dateInDateRange correctly identifies date one month and one year outside date range", () => {
    const dateRange = "01-02-2019 - 08-02-2019";
    const date = "2018-03-02";
    expect(dateInDateRange(date, dateRange)).toBe(false);
  });

  it("parseDateRangeToStartAndEndDates breaks a date range as a string into two dates", () => {
    const startAndEndDates = parseDateRangeToStartAndEndDates("01-02-2019 - 08-02-2019");
    expect(startAndEndDates.start).toBe("01-02-2019");
    expect(startAndEndDates.end).toBe("08-02-2019");
  });

  describe("apply date range filter to data in nested data structure", () => {
      describe("such as that used by CumulativeFlow", () => {
          const cumulativeFlowDataPoints = [
            {
              date: "2019-02-20",
              "Gathering Interest": 1,
            }, {
              date: "2019-02-21",
              "Gathering Interest": 1,
            }, {
              date: "2019-02-22",
              "Gathering Interest": 0,
            },{
              date: "2019-02-23",
              "Gathering Interest": 0,
            }];
          const unmergedCumulativeFlowData = [
            {
              id: "1",
              name: "Bug",
              data: cumulativeFlowDataPoints
            }, {
              id: "6",
              name: "Sub-task",
              data: cumulativeFlowDataPoints
            }, {
              "id": "5",
              "name": "Support Request",
              data: cumulativeFlowDataPoints
            }, {
              id: "10000",
              name: "Suggestion",
              data: cumulativeFlowDataPoints
            }
          ];

          it("apply date range filter to data for all issue types", () => {
            const filteredUnmergedData = applyDateRangeFilterToDataNestedInListOfObjects("21-02-2019 - 22-02-2019", unmergedCumulativeFlowData);
            filteredUnmergedData.forEach(issueType => {
              expect(issueType.data.length).toEqual(2);
            })
          });

      });
  });
});
