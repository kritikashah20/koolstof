import styles from './Toolbar.module.css';

import { IoColorPaletteSharp } from 'react-icons/io5'
import { RiQuillPenFill } from 'react-icons/ri'

import Selector from '../Selector';

import { poem } from '../../constants/poem'
import { themes } from '../../constants/themes'

const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
            <Selector icon={<IoColorPaletteSharp />} options={themes}/>
            <Selector icon={<RiQuillPenFill />} options={poem}/>
            {/* <Selector options={poem}/> */}
        </div>
    )
}

export default Toolbar
