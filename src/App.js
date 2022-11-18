import './App.css';
import PlansPage from './Components/Views/PlansPage';
import { Routes, Route } from 'react-router-dom';
import BuildAPlanPage from './Components/Views/BuildAPlanPage';
import PhonesPage from './Components/Views/PhonesPage';
import Link from './Components/Atoms/Link/Link';
import React, { useContext } from 'react';
import NavBarContent from './Components/Organisms/NavBarContent/NavBarContent';
import LeftNavigationBar from './Components/Molecules/LeftNavigationBar/LeftNavigationBar';
import NavBarDropdown from './Components/Molecules/NavBarDropDown/NavBarDropDown';
import SideBarDrawer from './Components/Organisms/SideBarDrawer/SideBarDrawer';
import Logo from './Components/Atoms/Logo/Logo';
import { MainContext } from './Context/MainContext';
import TopNavBarContent from './Components/Organisms/TopNavBarContent/TopNavBarContent';

function App() {
    const { matches } = useContext(MainContext);
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
                openIconColor='black'
                LeftNavigationBar={
                    <LeftNavigationBar
                        leftNavBarSwitchLabel={leftNavBarSwitchLabel}
                        menuTitle={menuTitle}
                        handleShow={handleShow}
                        open={open}
                        marginLeft='120px'
                        color='black'
                    />
                }
                NavBarDropdownContent={<NavBarDropdown />}
                SideBarDrawer={<SideBarDrawer />}
                Logo={
                    matches ? (
                        <Logo
                            height='49px'
                            width='150px'
                            src='https://images.ctfassets.net/t00ajdlq0g9p/52DEnZejQKnqbYx2UM6tHZ/9ca317ef2e1ef23772adb4ab0f0f9c4f/Fido_EN_D.png'
                        />
                    ) : (
                        <Logo
                            height='35px'
                            width='40px'
                            src='https://images.ctfassets.net/t00ajdlq0g9p/18VeoFD1UJFOhxpoe3FbXB/48f103d947a7a56b4e9714aacdcb930e/Fido_EN_M.png'
                        />
                    )
                }
                // SlideIn={
                //     <SlideInSearchBar slideInSearchBar={slideInSearchBar} closeShow={closeShow} />
                // }
                backgroundColor='#fff'
                alignItems='center'
                borderBottom='2px solid #ccc'
                topNavBar={<TopNavBarContent />}
                paddingTop='20px'
                paddingBottom='10px'
            />
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            {' '}
                            <h1 style={{ textAlign: 'center' }}>Welcome to Fido</h1>
                            <div
                                style={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Link href='/Plans' title='Plans' width='200px' />
                            </div>
                        </>
                    }
                />
                <Route path='/Plans' element={<PlansPage />} />
                <Route path='/Phones' element={<PhonesPage />} />
                <Route path='/Build-A-Plan' element={<BuildAPlanPage />} />
            </Routes>
        </>
    );
}

export default App;
