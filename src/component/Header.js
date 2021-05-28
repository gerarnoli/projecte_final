import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Dropdown from './Dropdown';
import Logo from '../media/VacunasLogo.png';

function Header() {
const [click, setClick] = useState(false);
const [dropdown] = useState(false);

const handleclick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <Link to='/' className='navbar-logo'>
                    COVID APP <img src={Logo} alt='logo' width='40px'  />
                </Link>
                
                <div className="menu-icon" onClick={handleclick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Covid' className='nav-links' onClick={closeMobileMenu}>
                            Covid
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/Vacunas' className='nav-links' onClick={closeMobileMenu}>
                            Vacunas
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Dades' className='nav-links' onClick={closeMobileMenu}>
                            Dades
                        </Link>
                    </li>
                </ul>

            </nav>
        </>

    );
}

export default Header;