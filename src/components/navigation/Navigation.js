import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className='center'>
            <p onClick={() => onRouteChange('signin')} className='f1 link grow pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation
