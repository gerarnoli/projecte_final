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
                <NavLink to="/about" activeStyle>
                    Covid
                </NavLink>
                <NavLink to="/servicios" activeStyle>
                    Vacunes
                </NavLink>
                <NavLink to="/contacto" activeStyle>
                    Contacto
                </NavLink>
            </NavMenu>
        </Nav>  
        </>
    );
}

export default Navbar
