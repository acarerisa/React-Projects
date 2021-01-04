import React, { Component } from "react";
import {authContext} from "../contexts/AuthContext";
import { themeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  // static contextType = themeContext;  Context iletimi birinci yöntem

  render() {
    return (
      <authContext.Consumer>{(acontext)=>(
        <themeContext.Consumer>
        {(tcontext) => {
            const {isAuthenticated, toggleAuth} = acontext;
            const { isLightTheme, light, dark } = tcontext;
            const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </themeContext.Consumer>
      )}
      
      </authContext.Consumer>
    );
  }
}

export default Navbar;
