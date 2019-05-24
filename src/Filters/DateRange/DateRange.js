import React, {useState} from 'react';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from "moment";

export function DateRange(props) {
  const minDate = moment(props.minDate);
  const maxDate = moment(props.maxDate);
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
        placeholder={minDate.format("DD.MM.YY") + "-" + maxDate.format("DD.MM.YY")} //TODO: update this
        // placeholder={minDate.toISOString(true).split("T")[0] + "-" + maxDate.toISOString(true).split("T")[0]} //TODO: update this
        value={datesRange}
        iconPosition="left"
        onChange={handleChange}
        initialDate={minDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    </Form>
  )
}

DateRange.propTypes = {
  minDate: PropTypes.any.isRequired,
  maxDate: PropTypes.any.isRequired
};
