import React from 'react';
import './Tabs.css';

function Tabs() {
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'row',
                listStyle: 'none',
                gap: '40px',
                borderBottom: '1px solid #ccc',
            }}
        >
            <li style={{ cursor: 'pointer' }}> Data, Talk & Text </li>
            <li style={{ cursor: 'pointer' }}> Talk & Text</li>
            <li style={{ cursor: 'pointer' }}>Basic</li>
        </ul>
    );
}

export default Tabs;
