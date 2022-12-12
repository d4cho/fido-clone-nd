import React  from 'react';
import './Tab.css';

function Tab({ tabName, styleTab, onClick }) {
    return (
        <li onClick={onClick} className='tab'>
            {tabName} {styleTab}
        </li>
    );
}

export default Tab;
