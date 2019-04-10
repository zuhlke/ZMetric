
export const calculateAverageThroughput = data => data.length ? calculateAverage(data) : 0;

const calculateAverage = data => {
    return data.map(entry => entry.throughput).reduce((acc, curr) => acc + curr, 0)/data.length
};
