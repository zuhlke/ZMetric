export class DataAdapter {


    convert(data) {
        let dateEntries = [];
        for( const entry of data.issues) {
            dateEntries.push(
                {
                    "date": entry.fields.created.split("T")[0],
                    "averageLeadTime": 0
                });
        }
        return dateEntries;
    }
}