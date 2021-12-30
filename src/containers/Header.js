import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const renderLink = ({ to, label }) => (
        <NavLink to={to} className={(navData) => (navData.isActive ? 'active nav-item' : 'nav-item')}>
            {label}
        </NavLink>
    );

    return (
        <div className='header-wrapper'>
            <nav className="navbar">
                <div className="menu">
                    {renderLink({ to: '/', label: 'Home' })}
                    {renderLink({ to: '/employees', label: 'Employees' })}
                </div>
            </nav>
        </div>
    );
};

export default Header;