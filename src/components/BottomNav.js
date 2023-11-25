import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BottomNav = ({ darkMode, set }) => {
    return (
        <Navbar className='fixed-bottom justify-content-center shadow' variant={darkMode ? 'dark' : 'light'}>
            <Nav>
                <Nav.Link className='nav-link mx-2'>
                    <i onClick={() => { set(!darkMode) }} className={darkMode ? "far fa-sun" : "far fa-moon"}></i>{' '}
                </Nav.Link>
                <Link className='nav-link mx-2' to='/home'><i className="fas fa-home"></i>{' '}</Link>
                <Link className='nav-link mx-2' to='/experience'><i className="far fa-star"></i>{' '}</Link>
                <Link className='nav-link mx-2' to='/projects'><i className="fas fa-tasks"></i>{' '}</Link>
                <Link className='nav-link mx-2' to='/about'><i className="far fa-address-card"></i>{' '}</Link>
            </Nav>
        </Navbar>
    )
}

export default BottomNav;
