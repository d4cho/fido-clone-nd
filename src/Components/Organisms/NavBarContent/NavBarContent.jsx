import React, { useContext } from 'react';
import './NavBarContent.css';

import { MainContext } from '../../../Context/MainContext';

function NavBarContent({
    LeftNavigationBar,
    RightNavigationBar,
    MiniCardsContent,
    SideBarDrawer,
    Logo,
    link,
    backgroundColor,
    alignItems,
    borderBottom,
    topNavBar,
    paddingTop,
    paddingBottom,
    hamburgerMenu,
    top,
    position,
}) {
    const { matches, toggle } = useContext(MainContext);

    return (
        <>
            <div
                className='parent-container'
                style={{
                    backgroundColor: backgroundColor,
                    borderBottom: borderBottom,
                    position: matches || toggle ? position : null,
                    top: matches || toggle ? top : null,
                }}
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
                        {hamburgerMenu}
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
            </div>
            {MiniCardsContent}
            {SideBarDrawer}
        </>
    );
}

export default NavBarContent;
