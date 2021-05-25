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
            <NavLink to="/">
                DADES COVID
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
