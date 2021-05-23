import React from 'react';
import Logo from '../Logo'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './Header-css';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Covid" activeStyle>
                    Covid
                </NavLink>
                <NavLink to="/Vacunes" activeStyle>
                    Vacunes
                </NavLink>
                <NavLink to="/Dades" activeStyle>
                    Dades
                </NavLink>
            </NavMenu>
        </Nav>  
        </>
    );
}

export default Navbar
