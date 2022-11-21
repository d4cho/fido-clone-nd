import React, { useContext } from 'react';
import './LeftNavigationBar.css';
import { leftNavbarLabels } from '../../../Data/NavbarLabel';
import { MainContext } from '../../../Context/MainContext';
import SearchIcon from '../../Atoms/SearchIcon/SearchIcon';

function LeftNavigationBar({ menuTitle, open, marginLeft, color }) {
    const {
        handleShow,
        handleMouseEnter,
        handleMouseLeave,
        isHover,
        navItemLabelHover,
        handleNavItemMouseEnter,
        handleNavItemMouseLeave,
        navItems,
        leftNavBarSwitchLabel,
    } = useContext(MainContext);
    return (
        <>
            <div className='left-navbar-container'>
                <nav>
                    <ul className='menu-items'>
                        {leftNavbarLabels.map((leftNavItem, idx) => (
                            <div key={idx}>
                                <li onClick={() => leftNavBarSwitchLabel(leftNavItem.title)}>
                                    <span
                                        style={
                                            menuTitle === leftNavItem.title && open
                                                ? { color: color }
                                                : null
                                        }
                                        className='align-name-title'
                                    >
                                        <a
                                            onMouseEnter={() => handleNavItemMouseEnter(leftNavItem.title)}
                                            onMouseLeave={() =>handleNavItemMouseLeave(leftNavItem.title)}
                                            href={leftNavItem.href}
                                        >
                                            {leftNavItem.title}
                                        </a>

                                        {leftNavItem.title === 'SHOP' && (
                                            <span
                                                className={
                                                    open && menuTitle === leftNavItem.title
                                                        ? 'arrow-up'
                                                        : 'arrow-down'
                                                }
                                            />
                                        )}
                                    </span>

                                    <div
                                        className={
                                            navItemLabelHover && navItems=== leftNavItem.title
                                                ? 'active'
                                                : null
                                        }
                                    />
                                </li>
                            </div>
                        ))}
                        <li
                            onClick={handleShow}
                            className='search-button'
                            style={{ marginLeft: marginLeft ? marginLeft : null }}
                        >
                            <SearchIcon
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                isHover={isHover}
                                backGroundColor='#ffe600'
                                borderRadius='50%'
                                border='1px solid black'
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default LeftNavigationBar;
