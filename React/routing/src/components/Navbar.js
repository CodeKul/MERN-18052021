import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav style={{height:"40px",backgroundColor:"lightgray"}}>
            {/* <ul style={{display:"flex",listStyle:"none",justifyContent:"space-evenly"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul> */}


            <ul style={{display:"flex",listStyle:"none",justifyContent:"space-evenly"}}>
                <li><NavLink to="/" activeClassName="abc">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
