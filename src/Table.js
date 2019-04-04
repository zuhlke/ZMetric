import React, { Component} from 'react';

export class Table extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <table>
                <thead>
                <tr>
                    <th colSpan="2">The table header</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>date</td>
                    <td>averageLeadTime</td>
                </tr>
                {
                    this.props.data.map((currentValue) =>
                        <tr>
                            <td>{currentValue.date}</td>
                            <td>{currentValue.averageLeadTime}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}
