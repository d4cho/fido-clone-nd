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
    borderBottom,
    topNavBar,
    paddingTop,
    paddingBottom,
}) {
    const { toggle, sideBarToggle, matches } = useContext(MainContext);

    return (
        <>
            <div
                className='parent-container'
                style={{ backgroundColor: backgroundColor, borderBottom: borderBottom }}
            >
                {matches ? topNavBar : null}
                <div
                    className='inner-container'
                    style={{
                        justifyContent: alignItems ? alignItems : 'space-evenly',
                        gap: alignItems ? '120px' : '',
                        paddingTop: matches ? paddingTop : null,
                        paddingBottom: matches ? paddingBottom : null,
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
            {MiniCardsContent}
            {SideBarDrawer}
        </>
    );
}

export default NavBarContent;
