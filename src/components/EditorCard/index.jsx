import styles from './EditorCard.module.css';

const EditorCard = ({ defaultColor, refer }) => {
    return (
        <div className={styles.editorCard}>
            <div  className={styles.outerCard} style={{backgroundColor: defaultColor}}>
                <div ref={refer} className={styles.contentCard}>
                    <h3>Content</h3>
                    <br />
                    <p>Write poems here</p>
                </div>
            </div>
        </div>
    )
}

export default EditorCard
