import React, { Component } from 'react'
import { themeContext } from '../contexts/ThemeContext';


class BookList extends Component {
    static contextType = themeContext; // Context iletimi birinci yöntem
    
    render() {
        const {isLightTheme, dark, light} = this.context;
        const theme = isLightTheme? light : dark;
        return (
          <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
              <ul >
                  <li style={{background:theme.ui}}>The Animals Farm</li>
                  <li style={{background:theme.ui}}>The Name of The Rose</li>
                  <li style={{background:theme.ui}}>The Automatic Orange</li>
              </ul>
              
          </div>  
        );
    }
}

export default BookList;