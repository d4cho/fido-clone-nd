import React, { useContext } from 'react';
import './SideBarDrawer.css';
import { MainContext } from '../../../Context/MainContext';
function SideBarDrawer({ height, sideBar, filterContentContainer, top, buttonFilter }) {
    const { toggle, filterToggle } = useContext(MainContext);

    let drawerClass = 'side-bar-drawer';
    if (toggle) {
        drawerClass = 'side-bar-drawer open';
    }
    if (filterToggle) {
        drawerClass = 'side-bar-drawer open';
    }
    return (
        <>
            <div
                className={drawerClass}
                style={{ height: filterToggle ? '1200px' : height, top: filterToggle ? top : null }}
            >
                {toggle && sideBar}
                {filterToggle && filterContentContainer}
                {filterToggle && buttonFilter}
            </div>
        </>
    );
}

export default SideBarDrawer;
