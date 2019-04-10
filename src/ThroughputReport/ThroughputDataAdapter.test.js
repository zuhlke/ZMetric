import {calculateAverageThroughput} from "./ThroughputDataAdapter";

const data = [
    {
        "date": "2019-02-01",
        "throughput":2
    },
    {
        "date": "2019-02-02",
        "throughput":6
    },
    {
        "date": "2019-02-03",
        "throughput":3
    },
    {
        "date": "2019-02-04",
        "throughput":7
    }];

describe("ThroughputDataAdapter", () => {
    it("calculates average throughput from data set correctly", () =>{
        expect(calculateAverageThroughput(data)).toEqual(4.5);
    });
    it("calculates average throughput for empty data set as 0", () =>{
        expect(calculateAverageThroughput([])).toEqual(0);
    });
});
