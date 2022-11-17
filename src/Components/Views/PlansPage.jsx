import ChoiceCardContent from '../Organisms/ChoiceCardContent/ChoiceCardContent';
import React, { useContext } from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import LeftNavigationBar from '../Molecules/LeftNavigationBar/LeftNavigationBar';
import NavBarDropdownContent from '../Molecules/NavBarDropDown/NavBarDropDown';
import SideBarDrawer from '../Organisms/SideBarDrawer/SideBarDrawer';
import Logo from '../Atoms/Logo/Logo';
import SlideInSearchBar from '../Molecules/SlideInSearchBar/SlideInSearchBar';
import { MainContext } from '../../Context/MainContext';
;

function PlansPage() {
    const { show, closeShow } = useContext(MainContext);
    let slideInSearchBar = 'search-bar-wrapper';
    if (show) {
        slideInSearchBar = 'search-bar-wrapper open';
    }

    const { menuTitle, setMenuTitle, open, setOpen } = useContext(MainContext);

    const { handleShow } = useContext(MainContext);

    const leftNavBarSwitchLabel = (menuTitle) => {
        switch (menuTitle) {
            case 'SHOP':
                setMenuTitle('SHOP');
                setOpen(!open);
                break;
            case 'MY ACCOUNT':
                setMenuTitle('MY ACCOUNT');
                break;
            case 'SUPPORT':
                setMenuTitle('SUPPORT');
                break;
            default:
                setMenuTitle('SHOP');
        }
    };
    return (
        <>
            <NavBarContent
                LeftNavigationBar={
                    <LeftNavigationBar
                        leftNavBarSwitchLabel={leftNavBarSwitchLabel}
                        menuTitle={menuTitle}
                        handleShow={handleShow}
                        open={open}
                        marginLeft="90px" 
                    />
                }
                NavBarDropdownContent={<NavBarDropdownContent />}
                SideBarDrawer={<SideBarDrawer />}
                Logo={
                    <Logo
                        height='49px'
                        width='150px'
                        src='https://images.ctfassets.net/t00ajdlq0g9p/52DEnZejQKnqbYx2UM6tHZ/9ca317ef2e1ef23772adb4ab0f0f9c4f/Fido_EN_D.png'
                    />
                }
                SlideIn={
                    <SlideInSearchBar slideInSearchBar={slideInSearchBar} closeShow={closeShow} />
                }
                backgroundColor='rgb(245 245 245 / 95%)'
                alignItems="center"
            />
            <ChoiceCardContent />
        </>
    );
}

export default PlansPage;
