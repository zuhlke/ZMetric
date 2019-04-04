export class DataAdapter {


    convert(data) {
        let dateEntries = [];
        for( const entry of data.issues) {
            const startDate = new Date(entry.fields.created);
            const endDate = new Date(entry.fields.resolutiondate);
            while (startDate < endDate) {
                console.log(startDate.toISOString().split('T', 1)[0])
                dateEntries.push(
                    {
                        "date": startDate.toISOString().split('T', 1)[0],
                        "averageLeadTime": 0
                    });
                startDate.setDate(startDate.getDate() + 1);

            }
        }
        return dateEntries;
    }
}