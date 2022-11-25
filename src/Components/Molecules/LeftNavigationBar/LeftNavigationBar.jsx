import React, { useContext, useState } from 'react';
import './LeftNavigationBar.css';
import { leftNavbarLabels } from '../../../Data/NavbarLabel';
import { MainContext } from '../../../Context/MainContext';
import SearchIcon from '../../Atoms/SearchIcon/SearchIcon';
import NavBarDropdown from '../NavBarDropDown/NavBarDropDown';
import TextField from '../../Atoms/TextField/TextField';
import { billsDropdownLabels } from '../../../Data/NavbarLabel';

function LeftNavigationBar({
    menuTitle,
    open,
    marginLeft,
    color,
    NavBarDropdownContent,
    arrowDown,
    arrowUp,
    closeIcon,
}) {
    const {
        openShow,
        handleMouseEnter,
        handleMouseLeave,
        isHover,
        navItemLabelHover,
        handleNavItemMouseEnter,
        handleNavItemMouseLeave,
        navItems,
        leftNavBarSwitchLabel,
        show,
        closeShow,
    } = useContext(MainContext);

    const [value, setValue] = useState('');

    console.log(show);

    return (
        <>
            <div className='left-navbar-container'>
                <nav>
                    <ul className='menu-items' style={{ position: 'relative' }}>
                        {leftNavbarLabels.map((leftNavItem, idx) => (
                            <div key={idx}>
                                <li
                                    style={{ position: 'relative' }}
                                    onClick={() => leftNavBarSwitchLabel(leftNavItem.title)}
                                >
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

                                        {leftNavItem.title === 'SHOP' &&
                                            (open && menuTitle === leftNavItem.title
                                                ? arrowUp
                                                : arrowDown)}
                                    </span>

                                    <div
                                        className={
                                            navItemLabelHover && navItems === leftNavItem.title
                                                ? 'active'
                                                : null
                                        }
                                        style={{
                                            marginTop: leftNavItem.title === 'SHOP' ? '27px' : null,
                                        }}
                                    />
                                    {leftNavItem.title === 'SHOP' && NavBarDropdownContent}
                                </li>
                            </div>
                        ))}
                        <li
                            onClick={openShow}
                            className='search-button'
                            style={{
                                marginLeft: marginLeft ? marginLeft : null,
                                position: 'relative',
                            }}
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
                        <NavBarDropdown
                            backgroundColor='#fff'
                            dataLabelItems={billsDropdownLabels}
                            title='Slide'
                            open={show}
                            marginTop='20px'
                            marginBottom='10px'
                            top='0px'
                            left='560px'
                            closeShow={closeShow}
                            closeIcon={closeIcon}
                            textField={
                                <TextField
                                    value={value}
                                    placeholder='Search'
                                    onChange={(e) => setValue(e.target.value)}
                                    searchIcon={
                                        <SearchIcon
                                            handleMouseEnter={handleMouseEnter}
                                            handleMouseLeave={handleMouseLeave}
                                            isHover={isHover}
                                            backGroundColor='#ffe600'
                                            boxShadow='0px 0px 0px 1px rgba(0,0,0,0.9'
                                            height='2.57rem'
                                            width='2.35rem'
                                        />
                                    }
                                />
                            }
                        />
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default LeftNavigationBar;
