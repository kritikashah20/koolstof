import styles from './Selector.module.css';

import { Select } from 'antd';
import { IoColorPaletteSharp } from 'react-icons/io5'
import { RiQuillPenFill } from 'react-icons/ri'
import React from 'react';


const { Option } = Select;

const Selector = ({ options }) => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className={styles.selectBar}>
            <RiQuillPenFill size={40} style={{padding: 8}}/>
            <Select placeholder="Select a value" style={{ width: 200, height: 40 }} onChange={handleChange} size="large">
                {options.map((p, index) => (
                    <Option value={p.text}>{p.text}</Option>
                ))}
            </Select>
        </div>
    )
}

export default Selector