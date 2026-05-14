import React, { useContext } from 'react'
import { ThemeContext } from '../hooks/useTheme'
import '../styles/components/button.css'
import {Sun, Moon} from 'feather-icons-react';

const ThemeToggler = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const IconName = theme == "light" ? Sun : Moon;
    return <div>
        <button onClick={toggleTheme} className={`themeToggle ${theme}`}>
            <div className="themeToggle__active">
                <IconName />
                {theme}
            </div>
            <div className="themeToggle__text">
                <span><Sun/>light</span>
                <span><Moon/>dark</span>
            </div>
        </button>
    </div>
}

export default ThemeToggler;