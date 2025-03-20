import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {

return(
<header>
    <nav>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </ul>
    </nav>
</header>

)
}
export default Header;