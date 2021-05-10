import React from 'react'
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
                <img src={require('../../images/logo.png')} alt="logo" />
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
