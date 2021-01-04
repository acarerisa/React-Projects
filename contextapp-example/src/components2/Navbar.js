import React, {useContext} from 'react'
import { authContext } from '../contexts/AuthContext';
import { themeContext } from '../contexts/ThemeContext'

function Navbar() {
    const { isLightTheme, light, dark } = useContext(themeContext);
    const {isAuthenticated, toggleAuth} = useContext(authContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div>
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
        </div>
    )
}

export default Navbar
