import React from 'react';
import './Logo.css';

function Logo({ height, width, src }) {
    return (
        <a href='/'>
            <img
                style={{ width: width, height: height }}
                className='header-logo-img'
                src={src}
                alt=''
            />
        </a>
    );
}

export default Logo;
