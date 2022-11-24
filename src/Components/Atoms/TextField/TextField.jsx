import React from 'react';
import './TextField.css';

function TextField({ placeholder, value, handleInputChange, width, type, checked, searchIcon }) {
    return (
        <div style={{ position: 'relative' }}>
            <input
                style={{
                    width: width,
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
                        right: '0',
                        top: '60%',
                        translate: '0 -52%',
                        cursor: 'pointer',
                    }}
                >
                    {searchIcon}
                </span>
            )}
        </div>
    );
}

export default TextField;
