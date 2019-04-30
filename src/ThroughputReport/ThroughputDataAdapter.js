import moment from "moment";

export const convertFromJiraToThroughput = (data)  => {
    let dateEntries = [];
    const periodStartDate = data.issues
        .map((issue) => new moment(issue.fields.created))
        .sort((a, b) => a - b)[0];

    const periodEndDate = data.issues
        .map((issue) => issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate) : new moment())
        .sort((a, b) => b - a)[0];

    const issues = data.issues.map( issue => { return {
        key: issue.key,
        resolvedDate: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate) : undefined,
    } } ) ;

    while (periodStartDate.diff(periodEndDate) <= 0) {
        const ThroughputForCurrentDate = getThroughputForCurrentDate(issues,periodStartDate);
        dateEntries.push(
            {
                "date": periodStartDate.format('YYYY-MM-DD'),
                "throughput": ThroughputForCurrentDate
            });
        periodStartDate.add(1, 'd')

    }
    return dateEntries;
};


const getThroughputForCurrentDate = (issues, date) => {
    return issues
        .filter(issue => issue.resolvedDate && issue.resolvedDate.isSame(date,'day')).length;
};
export const calculateAverageThroughput = data => data.length ? calculateAverage(data) : 0;

const calculateAverage = data => {
    return data.map(entry => entry.throughput).reduce((acc, curr) => acc + curr, 0)/data.length
};
