import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/fan" activeClassName="current">Fan</NavLink>
            <NavLink to="/about" activeClassName="current">About Us</NavLink>
            <BackButton/>
        </nav>
    );
}

export default Header;