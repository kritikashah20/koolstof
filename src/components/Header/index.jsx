import { Button } from "antd"
import { AiFillGithub } from "react-icons/ai"

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Button  type="link" href="https://github.com/" className={styles.customButton}>
                <AiFillGithub style={{ marginRight: 10 }}/> 
                <span style={{ margin: 0, paddingTop: 0, lineHeight: 1.2}}>Sign in/up</span> 
            </Button>
        </div>
    )
}

export default Header
