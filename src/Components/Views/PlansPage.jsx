import ChoiceCardContent from "../Organisms/ChoiceCardContent/ChoiceCardContent";
import React, { useContext } from 'react';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import LeftNavigationBar from '../Molecules/LeftNavigationBar/LeftNavigationBar';
import NavBarDropdownContent from '../Molecules/NavBarDropDownContent/NavBarDropDownContent';
import SideBarDrawer from '../Organisms/SideBarDrawer/SideBarDrawer';
import Logo from '../Atoms/Logo/Logo';
import SlideInSearchBar from '../Molecules/SlideInSearchBar/SlideInSearchBar';
import { MainContext } from '../../Context/MainContext';
import Link from '../Atoms/Link/Link';

function PlansPage() {
     const { show, closeShow } = useContext(MainContext);
     let slideInSearchBar = 'search-bar-wrapper';
     if (show) {
         slideInSearchBar = 'search-bar-wrapper open';
     }
    return (
        <>
            <NavBarContent
                LeftNavigationBar={<LeftNavigationBar />}
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
                link={<Link  title='View Phones' />}
            />
            <ChoiceCardContent />
        </>
    );
}

export default PlansPage;
