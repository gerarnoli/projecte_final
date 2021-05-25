import React from 'react';
import Logoheader from '../logos/Logoheader';
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
                <Logoheader />
            </NavLink>
            <NavMenu to="/">
                COVID APP
            </NavMenu>
            
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
