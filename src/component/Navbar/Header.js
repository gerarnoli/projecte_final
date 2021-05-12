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
                    About
                </NavLink>
                <NavLink to="/servicios" activeStyle>
                    Servicios
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
