import moment from "moment";

export class DataAdapter {


    convert(data) {
        let dateEntries = [];
        for( const entry of data.issues) {
            const startDate = moment(entry.fields.created)
            const endDate = moment(entry.fields.resolutiondate)
            const leadTime = endDate.diff(startDate,'days');
            while (startDate < endDate) {
                if(!dateEntries.some(e => e.date === startDate.format('YYYY-MM-DD') ))
                {
                    dateEntries.push(
                        {
                            "date": startDate.format('YYYY-MM-DD'),
                            "averageLeadTime": 0
                        });
                }
                startDate.add(1,'d')

            }
        }
        return dateEntries;
    }
}