import React, { useContext } from 'react';
import './TopNavBar.css';
import { MainContext } from '../../../Context/MainContext';
function TopNavBar({ data, height, backgroundColor, dropNavContent }) {
    const { iconOpen, iconOpenToggle } = useContext(MainContext);
    return (
        <div style={{ height: height, backgroundColor: backgroundColor }}>
            <ul className='top-nav-bar'>
                {data.map((topNavItem, idx) => (
                    <div key={idx} className='icons-container'>
                        {topNavItem.title === 'ON' ? (
                            <span className='arrow-icon' onClick={() => iconOpenToggle()}>
                                <li className='top-nav-bar-item'>{topNavItem.title}</li>{' '}
                                {iconOpen ? (
                                    <span>{topNavItem.arrowUp}</span>
                                ) : (
                                    <span className='top-bar-arrow-down'>
                                        {topNavItem.arrowDown}
                                    </span>
                                )}
                            </span>
                        ) : (
                            <>
                                <span>{topNavItem.icon}</span>
                                <li className='top-nav-bar-item'>{topNavItem.title}</li>{' '}
                            </>
                        )}
                        {topNavItem.title === 'ON' ?  dropNavContent  : null}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TopNavBar;
