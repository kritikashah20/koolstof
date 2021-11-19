import { useState } from 'react';

import styles from './Toolbar.module.css';

import { IoColorPaletteSharp } from 'react-icons/io5'
import { RiQuillPenFill } from 'react-icons/ri'
import { ChromePicker } from 'react-color';

import Selector from '../Selector';

import { poem } from '../../constants/poem'
import { themes } from '../../constants/themes'

const Toolbar = () => {

    const [color, setColor] = useState("#26ecdf")
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div className={styles.toolbar}>
            <Selector icon={<IoColorPaletteSharp size={50} style={{padding: 8}}/>} options={themes}/>
            <Selector icon={<RiQuillPenFill size={50} style={{padding: 8}}/>} options={poem}/>
            <div onClick={() => setShowColorPicker(!showColorPicker)} style={{ backgroundColor: color, width: 50, height: 50}} />
            {
                showColorPicker && <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor)}/>
            }    
        </div>
    )
}

export default Toolbar
