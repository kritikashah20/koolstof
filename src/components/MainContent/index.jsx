import { Link } from 'react-router-dom';

import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Link to="/" className={styles.appLink}>koolstof</Link>
            <h2>Create and share beautiful images of your source code. Start typing or drop a file into the text area to get started.</h2>
        </div>
    )
}

export default MainContent
