import React,{useContext} from 'react'
import './Theme.css'
import { themeContext } from './ThemeToggleProvider'
function Navbar() {
    const [dark,toggleTheme]=useContext(themeContext)
    console.log(dark)
    return (
        <nav className={`navbar-container ${dark ? "navbar-dark":"navbar-light"}`} style={{height:"45px"}}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li><button onClick={toggleTheme}>Dark</button></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
