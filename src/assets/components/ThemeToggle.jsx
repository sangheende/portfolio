import React, { useContext } from 'react'
import { ThemeContext } from '../hooks/useTheme'

const ThemeToggler = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return <div>
        <h1>현재 테마: {theme}</h1>
        <button onClick={toggleTheme}>테마변경</button>
    </div>
}

export default ThemeToggler;