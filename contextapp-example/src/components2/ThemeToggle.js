import React, {useContext} from 'react'
import { themeContext } from '../contexts/ThemeContext';

function ThemeToggle() {
    const {toggleTheme} = useContext(themeContext)
    return (
        <div>
          <button onClick={toggleTheme}>Toggle the theme</button>  
        </div>
    )
}

export default ThemeToggle;
