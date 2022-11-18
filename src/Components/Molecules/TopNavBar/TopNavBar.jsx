import React from 'react';
import './TopNavBar.css';
import { topNavBarData } from '../../../Data/NavbarLabel';


function TopNavBar() {
    return (
        <div style={{ height: '50px', backgroundColor: '#ffe600' }}>
            <ul className='top-nav-bar'>
                {topNavBarData.map((topNavItem, idx) => (
                    <div key={idx}>
                        <li className='top-nav-bar-item'>{topNavItem.title}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TopNavBar;
