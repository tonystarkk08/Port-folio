import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = ({ darkMode, set }) => {
    return (
        <Navbar className='fixed-top shadow' variant={darkMode ? 'dark' : 'light'}>
            <Navbar.Brand onClick={() => { set(!darkMode) }}>
                <i className={darkMode ? "far fa-sun" : "far fa-moon"}></i>{' '}
                Mohammad Sadique
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Link className='nav-link' to='/home'><i className="fas fa-home"></i>{' '}Home</Link>
                <Link className='nav-link' to='/experience'><i className="far fa-star"></i>{' '}Skills</Link>
                <Link className='nav-link' to='/projects'><i className="fas fa-tasks"></i>{' '}Projects</Link>
                <Link className='nav-link' to='/about'><i className="far fa-address-card"></i>{' '}About</Link>
            </Nav>
        </Navbar>
    )
}

export default TopNav;
