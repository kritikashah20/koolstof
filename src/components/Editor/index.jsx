import styles from './Editor.module.css';

import Toolbar from '../Toolbar';
import EditorCard from '../EditorCard';

const Editor = () => {
    return (
        <div className={styles.editorContainer}>
            <Toolbar />
            <EditorCard />
        </div>
    )
}

export default Editor
