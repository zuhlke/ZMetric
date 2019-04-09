import moment from 'moment';

export class DateFilter {

    static applyDateRangeFilter(dateRange, data){
        return data.filter(dataPoint => this.dateInDateRange(dataPoint.date, dateRange))

    }

    static dateInDateRange(date, dateRange){
        const dates = this.parseDateRangeToStartAndEndDates(dateRange);
        // return moment(date, 'DD-MM-YYYY').isBetween(moment(dates.start, 'DD-MM-YYYY'), moment(dates.end, 'DD-MM-YYYY'));
        return moment(date, 'YYYY-MM-DD').isBetween(moment(dates.start, 'DD-MM-YYYY'), moment(dates.end, 'DD-MM-YYYY'), null, '[]');
    }

    static parseDateRangeToStartAndEndDates(dateRange){
        const dates = dateRange.split(" - ");
        return {start: dates[0], end: dates[1]}
    }


}
