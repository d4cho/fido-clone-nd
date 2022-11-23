import React, { useContext } from 'react';
import './LeftNavigationBar.css';
import { leftNavbarLabels } from '../../../Data/NavbarLabel';
import { MainContext } from '../../../Context/MainContext';
import SearchIcon from '../../Atoms/SearchIcon/SearchIcon';

function LeftNavigationBar({ menuTitle, open, marginLeft, color, NavBarDropdownContent }) {
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
                                            style={{ position: 'relative' }}
                                            onMouseEnter={() =>
                                                handleNavItemMouseEnter(leftNavItem.title)
                                            }
                                            onMouseLeave={() =>
                                                handleNavItemMouseLeave(leftNavItem.title)
                                            }
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
                                            navItemLabelHover && navItems === leftNavItem.title
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
                                boxShadow='0px 0px 0px 1px rgba(0,0,0,0.9'
                                height='2rem'
                                width='2rem'
                            />
                        </li>
                    </ul>
                    {NavBarDropdownContent}
                </nav>
            </div>
        </>
    );
}

export default LeftNavigationBar;
