import React, { Component } from 'react'
import { themeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType=themeContext;
    render() {
        const {toggleTheme} = this.context;
        return (
              
         <button onClick={toggleTheme}>Toggle the theme</button>
            
            
        )
    }
}

export default ThemeToggle;
