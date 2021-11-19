import styles from './EditorCard.module.css';

const EditorCard = () => {
    return (
        <div className={styles.editorCard}>
            <div className={styles.outerCard}>
                <div className={styles.contentCard}>
                    Content
                </div>
            </div>
        </div>
    )
}

export default EditorCard
