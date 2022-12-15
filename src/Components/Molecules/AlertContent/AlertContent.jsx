import React from 'react';
import './AlertContent.css';

function AlertContent({ backgroundColor, marginBottom, content, closeIcon, show }) {
    return (
        <>
            {show?
                <div
                    className='alert-content-container'
                    style={{ backgroundColor: backgroundColor, marginBottom: marginBottom }}
                >
                    {content}
                    {closeIcon}
                </div>
            : null}
        </>
    );
}

export default AlertContent;
