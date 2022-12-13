import React from 'react';
import './TextField.css';

function TextField({ placeholder, value, handleInputChange, width, type, checked, searchIcon }) {
    return (
        <>
            <input
                style={{
                    width: width,
                    position: 'relative',
                }}
                placeholder={placeholder}
                className='text-field'
                value={value}
                onChange={handleInputChange}
                type={type}
                checked={checked}
            />
            {searchIcon && (
                <span
                    style={{
                        position: 'absolute',
                        right: '12px',
                        top: '9.2%',
                        translate: '0 -52%',
                        cursor: 'pointer',
                    }}
                >
                    {searchIcon}
                </span>
            )}
        </>
    );
}

export default TextField;
