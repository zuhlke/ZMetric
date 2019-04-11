import React, {useState} from 'react';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';

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

DateRangePicker.propTypes = {
    minDate: PropTypes.any.isRequired,
    maxDate: PropTypes.any.isRequired
};
