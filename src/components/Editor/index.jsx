import { useState } from 'react';

import styles from './Editor.module.css';

import Toolbar from '../Toolbar';
import EditorCard from '../EditorCard';

import { contentThemes } from '../../constants/contentThemes';


const Editor = () => {

    let defaultColor = '#f00'

    const [theme, setTheme] = useState('');

    const handleChange = (selectedTheme) => {
        setTheme(contentThemes[selectedTheme.value]);
    };

    const refCallback = (node) => {
        if (node) {
            theme &&
                Object.keys(theme).forEach((element) => {
                    node.style.setProperty(element, theme[element], 'important');
                    // if (element === 'background-color' || element === 'background') {
                    //     // apply the same background mentioned for theme to the body of the website
                    //     document.body.style.background = theme[element];
                    // }
        });
        }
    };

    return (
        <div className={styles.editorContainer}>
            <Toolbar handleChange={handleChange} />
            <EditorCard refer={refCallback} defaultColor={defaultColor} />
        </div>
    )
}

export default Editor
