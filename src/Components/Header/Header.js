import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <nav className='nav'>
            <div className='nav-logo'>The Modern Milkman </div>
            <div className='nav-actions'>
                <h2>Sign In</h2>
                <h2>Cart</h2>
            </div>
        </nav>
    );
};

export default Header;
