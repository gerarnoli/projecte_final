import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

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
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign in</NavBtnLink>
            </NavBtn>

        </Nav>  
        </>
    );
}

// Confirmacion de que Kevin no Existe

export default Navbar
