import React, {useState} from 'react';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from "moment";

export function DateRange(props) {
  const minDate = moment(props.minDate, "DD-MM-YY");
  const maxDate = moment(props.maxDate, "DD-MM-YY");
  const [datesRange, updateDatesRange] = useState('');

  const handleChange = (event, {value}) => {
    updateDatesRange(value);
    if (isCompleteDateRange(value)) {
      props.dateRangeUpdate(value);
    }
  };

  const isCompleteDateRange = dateRangeString => dateRangeString.length === 19;

  return (
    <Form>
      <DatesRangeInput
        name="datesRange"
        placeholder={minDate.format("DD.MM.YY") + " - " + maxDate.format("DD.MM.YY")}
        value={datesRange}
        iconPosition="left"
        onChange={handleChange}
        initialDate={minDate}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={"DD.MM.YY"}
      />
    </Form>
  )
}

DateRange.propTypes = {
  minDate: PropTypes.any.isRequired,
  maxDate: PropTypes.any.isRequired
};
