import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
const selectOnChange = (value) => {
    console.log(`selected ${value}`);
}
const Paymenttype = () => {
    return (
        <Select placeholder="Select Payment Type"
            style={{ width: '100%' }}
            onChange={selectOnChange} defaultValue="All"
        >
            <Option value="All">All</Option>
            <Option value="Cash">Cash</Option>
            <Option value="Card">Card</Option>
            <Option value="Wallet">Wallet</Option>
            <Option value="Others">Others</Option>
        </Select>
    );
}
export default Paymenttype;