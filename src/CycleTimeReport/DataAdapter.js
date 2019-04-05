import moment from "moment";



export class DataAdapter {



    convert(data) {
        let dateEntries = [];
        const periodStartDate = data.issues
            .map((issue) => new moment(issue.fields.created))
            .sort((a, b) => a - b)[0];

        const periodEndDate = data.issues
            .map((issue) => moment.max(new moment(issue.fields.created), issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate) : new moment()))
            .sort((a, b) => b - a)[0];

        const issues = data.issues.map( issue => { return {
            key: issue.key,
            creationDate: new moment(issue.fields.created),
            resolvedDate: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate) : undefined,
            leadTime: issue.fields.resolutiondate ? new moment(issue.fields.resolutiondate).diff(new moment(issue.fields.created),'days') : undefined
        } } ) ;

        while (periodStartDate <= periodEndDate) {
           const currentLeadTime = DataAdapter.getAverageLeadTime(issues,periodStartDate);
            dateEntries.push(
                {
                    "date": periodStartDate.format('YYYY-MM-DD'),
                    "averageLeadTime": currentLeadTime
                });
            periodStartDate.add(1, 'd')
        }
        return dateEntries;
    }
    static average = arr => arr.length ? arr.reduce( ( l, r ) => l + r, 0 ) / arr.length : 0;

    static getAverageLeadTime(issues, date) {
        const leadTimes = issues
            .filter(issue => issue.resolvedDate <= date)
            .map(issue => issue.leadTime);
        return DataAdapter.average(leadTimes)
    }


}