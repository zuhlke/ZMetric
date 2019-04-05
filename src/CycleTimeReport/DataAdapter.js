import moment from "moment";

export class DataAdapter {


    convert(data) {
        let dateEntries = [];

        const periodStartDate = data.issues
            .map((issue) => new moment(issue.fields.created))
            .sort((a, b) => a - b)[0];

        const periodEndDate = data.issues
            .map((issue) => moment.max(new moment(issue.fields.created), new moment(issue.fields.resolutiondate)))
            .sort((a, b) => b - a)[0];



        while (periodStartDate < periodEndDate) {
            dateEntries.push(
                {
                    "date": periodStartDate.format('YYYY-MM-DD'),
                    "averageLeadTime": 0
                });
            periodStartDate.add(1, 'd')
        }
        return dateEntries;
    }
}