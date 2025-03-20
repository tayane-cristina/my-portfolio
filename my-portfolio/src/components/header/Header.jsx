import React from 'react';
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from '../../styled/GlobalStyles';

const Header = () => {

return(
<HeaderContainer>
    <h2>Tayane</h2>
    <nav>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </ul>
    </nav>
</HeaderContainer>

)
}
export default Header;