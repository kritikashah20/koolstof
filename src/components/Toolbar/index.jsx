import styles from './Toolbar.module.css';

import Selector from '../Selector';

import { poem } from '../../constants/poem'
import { themes } from '../../constants/themes'

const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
            <Selector options={themes}/>
            <Selector options={poem}/>
            <Selector options={poem}/>
        </div>
    )
}

export default Toolbar
