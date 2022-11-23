import React, { useState } from 'react';
import './TextField.css';

function TextField({ placeholder, value, handleInputChange, width, type, checked, searchIcon }) {
    return (
        <div>
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
                        left: '138.7px',
                        bottom: '138px',
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
