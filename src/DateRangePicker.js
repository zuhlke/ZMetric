import React from 'react';
import {DatesRangeInput} from "semantic-ui-calendar-react";
import {Form} from 'semantic-ui-react';

export class DateRangePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            datesRange: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, {name, value}) {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
            if(this.isCompleteDateRange(value)){
                this.props.dateRangeUpdate(value);
            }

        }
    };

    isCompleteDateRange(dateRangeString){
        return dateRangeString.length === 23;
    }


    render(){
        return(
            <Form>
                <DatesRangeInput
                    id="dates-range-input"
                    name="datesRange"
                    placeholder="From - To"
                    value={this.state.datesRange}
                    iconPosition="left"
                    onChange={this.handleChange}
                    initialDate={this.props.minDate}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                />
            </Form>
        )
    }

}
