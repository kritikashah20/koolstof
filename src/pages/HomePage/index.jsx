import styles from './HomePage.module.css';

import MainContent from '../../components/MainContent';
import Editor from '../../components/Editor';

const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <MainContent />
            <Editor />
        </div>
    )
}

export default HomePage
