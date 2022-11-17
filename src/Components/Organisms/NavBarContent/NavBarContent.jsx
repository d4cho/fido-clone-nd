import React, { useContext } from 'react';
import './NavBarContent.css';

import { MainContext } from '../../../Context/MainContext';

function NavBarContent({
    LeftNavigationBar,
    RightNavigationBar,
    NavBarDropdownContent,
    MiniCardsContent,
    SideBarDrawer,
    Logo,
    SlideIn,
    link,
    backgroundColor,
    alignItems,
}) {
    const { toggle, sideBarToggle } = useContext(MainContext);

    return (
        <>
            <div className='parent-container' style={{ backgroundColor: backgroundColor }}>
                <div
                    className='inner-container'
                    style={{
                        justifyContent: alignItems ? alignItems : 'space-evenly',
                        gap: alignItems ? '120px' : '',
                    }}
                >
                    <div className='join-now-container'>
                        {link}
                        <span
                            onClick={sideBarToggle}
                            className={toggle ? 'x-button' : 'menu-button'}
                        >
                            <span className='menu-icon' data-parent-container-toggle-icon=''></span>
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            gap: '80px',
                        }}
                    >
                        {RightNavigationBar}
                        {LeftNavigationBar}
                    </div>

                    {Logo}
                </div>
                {SlideIn}
            </div>
            {NavBarDropdownContent}
            {MiniCardsContent}
            {SideBarDrawer}
        </>
    );
}

export default NavBarContent;
