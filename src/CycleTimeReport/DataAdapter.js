export class DataAdapter {


    convert(data) {

        return [
            {
                "date": data.issues[0].fields.created.split("T")[0],
                "averageLeadTime": 0
            },
            {
                "date": data.issues[1].fields.created.split("T")[0],
                "averageLeadTime": 0
            }
        ];
    }
}