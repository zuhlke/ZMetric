import {DynamicTable} from "./DynamicTable";
import {mount} from "enzyme";
import React from 'react';
import {Table} from 'semantic-ui-react'

describe("DynamicTable", () => {
    it("generatesTableHeaderFromDataKeys", () => {
        const mockData = [
            {
                "date": "2019-02-01",
                "throughput": 1
            },
            {
                "date": "2019-02-02",
                "throughput": 3
            }
        ];

        const wrapper = mount(<DynamicTable data={mockData}/>);
        const tableHeader = wrapper.find(Table.HeaderCell);

        expect(tableHeader.length).toBe(2);
        expect(tableHeader.first().text()).toBe("date");
        expect(tableHeader.last().text()).toBe("throughput");
    });
    it("generatesTwoTableRows", () => {
        const mockData = [
            {
                "date": "2019-02-01",
                "throughput": 1
            },
            {
                "date": "2019-02-02",
                "throughput": 3
            }
        ];

        const wrapper = mount(<DynamicTable data={mockData}/>);
        const tableRow = wrapper.find(Table.Row);

        expect(tableRow.length).toBe(3);
    });
    it("generates4TableCells", () => {
        const mockData = [
            {
                "date": "2019-02-01",
                "throughput": 1
            },
            {
                "date": "2019-02-02",
                "throughput": 3
            }
        ];

        const wrapper = mount(<DynamicTable data={mockData}/>);
        const tableCell = wrapper.find(Table.Cell);

        expect(tableCell.length).toBe(6);
    });
});
