import moment from 'moment';

    export const applyDateRangeFilter = (dateRange, data) => {
        return data.filter(dataPoint => dateInDateRange(dataPoint.date, dateRange))
    };

    export const dateInDateRange = (date, dateRange) => {
        const dates = parseDateRangeToStartAndEndDates(dateRange);
        return moment(date, 'YYYY-MM-DD').isBetween(moment(dates.start, 'DD-MM-YYYY'), moment(dates.end, 'DD-MM-YYYY'), null, '[]');
    };

    export const parseDateRangeToStartAndEndDates = (dateRange) => {
        const dates = dateRange.split(" - ");
        return {start: dates[0], end: dates[1]}
    };

