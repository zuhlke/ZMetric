import {getThroughput} from "../DataFetcher";
import {convertThroughputDataToTrendLineData} from "./TrendLine";

describe("TrendLine", () => {
    it("returns data set to plot trend line in recharts in correct format for throughput", () => {
        const initialDataSet = getThroughput();
        const regressionDataSet = convertThroughputDataToTrendLineData(initialDataSet);
        console.log(initialDataSet);
        console.log("\n");
        console.log( regressionDataSet)
    });
});
