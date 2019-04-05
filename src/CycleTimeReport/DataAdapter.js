import moment from "moment";

export class DataAdapter {


    convert(data) {
        let dateEntries = [];
        const periodStartDate = data.issues.map((issue) => {
            return new moment(issue.fields.created);
        }).sort(function(a, b){return a - b;})[0];

        const periodEndDate = data.issues.map((issue) => {

            return  moment.max(new moment(issue.fields.created), new moment(issue.fields.resolutiondate));
        }).sort(function(a, b){return b - a;})[0];

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