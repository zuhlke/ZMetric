import React, {useState} from 'react';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {Form} from 'semantic-ui-react';

export function DateRangePicker(props) {
    const [datesRange, updateDatesRange] = useState('');

    const handleChange = (event, {value}) => {
        updateDatesRange(value);
        if (isCompleteDateRange(value)) {
            props.dateRangeUpdate(value);
        }
    };

    const isCompleteDateRange = dateRangeString => dateRangeString.length === 23;

    return (
        <Form>
            <DatesRangeInput
                id="dates-range-input"
                name="datesRange"
                placeholder="From - To"
                value={datesRange}
                iconPosition="left"
                onChange={handleChange}
                initialDate={props.minDate}
                minDate={props.minDate}
                maxDate={props.maxDate}
            />
        </Form>
    )
}
