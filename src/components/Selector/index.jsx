import styles from './Selector.module.css';

import { Select } from 'antd';
import { RiQuillPenFill } from 'react-icons/ri'
import React from 'react';


const { Option } = Select;

const Selector = ({ icon, options }) => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className={styles.selectBar}>
            {icon}
            <Select placeholder="Select a value" size="large" style={{ width: 200, height: 50 }} onChange={handleChange} >
                {options.map((p, index) => (
                    <Option value={p.text}>{p.text}</Option>
                ))}
            </Select>
        </div>
    )
}

export default Selector
