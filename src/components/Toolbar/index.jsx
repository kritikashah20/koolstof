import { useState } from 'react';

import styles from './Toolbar.module.css';

import { IoColorPaletteSharp } from 'react-icons/io5'
import { RiQuillPenFill } from 'react-icons/ri'
import { ChromePicker } from 'react-color';
import { Select, Button } from 'antd';
import { AiOutlineDown, AiTwotoneSetting } from 'react-icons/ai'

import Selector from '../Selector';

import { poem } from '../../constants/poem'
import { contentThemes } from '../../constants/contentThemes'

import Head from '../Dropdown/Head';

const Toolbar = ({ handleChange }) => {


    return (
        <div className={styles.toolbar}>
            <Head icon={<IoColorPaletteSharp size={50} style={{padding: 8}}/>} handleChange={handleChange} options={contentThemes} />

            <Head icon={<RiQuillPenFill size={50} style={{padding: 8}}/>} handleChange={handleChange} options={poem} />

            {/* <div style={{backgroundColor: color}}>
            <Select value={color} size="small" showArrow={false} onChange={updatedColor => setColor(updatedColor.hex)}>
                    <Option value={color}><ChromePicker color={color} onChange={updatedColor => handleColorChange(updatedColor)} /></Option>
            </Select>
            </div> */}

            <div style={{height: '54px', border: '1px solid white', borderRadius: '3px',padding: '8px' }}>
                <AiTwotoneSetting size={30} style={{ position: 'relative', textAlign: 'center'}} />
            </div>

            <div style={{border: '1px solid #57b4f8', cursor: 'pointer'}}>
                <Button ghost style={{height: 52, border: 'none', borderRight: '1px solid #57b4f8', color: '#57b4f8'}} size='large'>Tweet</Button>
                <AiOutlineDown style={{width: 30, color: '#57b4f8'}}/>
            </div>

            <div style={{border: '1px solid #c198fb', cursor: 'pointer'}}>
                <Button ghost style={{height: 52, border: 'none', borderRight: '1px solid #c198fb', color: '#c198fb'}} size='large'>Export</Button>
                <AiOutlineDown style={{width: 30, color: '#c198fb'}}/>
            </div>


        </div>
    )
}

export default Toolbar
