import './App.css';
import PlansPage from './Components/Views/PlansPage';
import { Routes, Route } from 'react-router-dom';
import BuildAPlanPage from './Components/Views/BuildAPlanPage';
import PhonesPage from './Components/Views/PhonesPage';
import React, { useContext } from 'react';
import NavBarContent from './Components/Organisms/NavBarContent/NavBarContent';
import LeftNavigationBar from './Components/Molecules/LeftNavigationBar/LeftNavigationBar';
import NavBarDropdown from './Components/Molecules/NavBarDropDown/NavBarDropDown';
import SideBarDrawer from './Components/Organisms/SideBarDrawer/SideBarDrawer';
import Logo from './Components/Atoms/Logo/Logo';
import { MainContext } from './Context/MainContext';
import TopNavBarContent from './Components/Organisms/TopNavBarContent/TopNavBarContent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { shopDropdownLabels } from './Utils/NavbarLabel';
import { provincesDropdownLabels } from './Utils/Provinces';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideNavigationBar from './Components/Molecules/SideNavigationBar/SideNavigationBar';
import SocialLink from './Components/Atoms/SocialLink/SocialLink';
import Link from './Components/Atoms/Link/Link';
import { navInfo } from './Utils/NavbarLabel';



function App() {
    const { menuTitle, open, handleShow, iconOpen, matches, sideBarToggle, toggle } =
        useContext(MainContext);

    const topNavBarData = [
        {
            arrowDown: <KeyboardArrowDownOutlinedIcon />,
            title: 'ON',
            arrowUp: <KeyboardArrowUpOutlinedIcon />,
        },
        {
            title: 'FR',
        },
        {
            title: 'FIND A STORE',
            icon: <LocationOnOutlinedIcon />,
        },
        {
            title: 'SIGN IN ',
            icon: <Person2OutlinedIcon />,
        },
    ];

    return (
        <>
            <NavBarContent
                top='0'
                position='sticky'
                hamburgerMenu={
                    toggle ? (
                        <span style={{ cursor: 'pointer' }} onClick={sideBarToggle}>
                            <CloseIcon />
                        </span>
                    ) : (
                        <span style={{ cursor: 'pointer' }} onClick={sideBarToggle}>
                            <MenuIcon />
                        </span>
                    )
                }
                close={<CloseIcon />}
                openIconColor='black'
                LeftNavigationBar={
                    <LeftNavigationBar
                        menuTitle={menuTitle}
                        handleShow={handleShow}
                        open={open}
                        marginLeft='120px'
                        color='black'
                        NavBarDropdownContent={
                            <NavBarDropdown
                                title='SHOP'
                                backgroundColor='white'
                                dataLabelItems={shopDropdownLabels}
                                open={open}
                                top='58px'
                                left='-30px'
                            />
                        }
                        closeIcon={<CloseIcon />}
                        arrowDown={<KeyboardArrowDownOutlinedIcon />}
                        arrowUp={<KeyboardArrowUpOutlinedIcon />}
                    />
                }
                SideBarDrawer={
                    <SideBarDrawer
                        top='0'
                        height='1050px'
                        sideBar={
                            <SideNavigationBar
                                backgroundColor='#fafafa'
                                color='black'
                                navInfo={navInfo}
                                padding='10px 5px 8px'
                                fontSize='0.9rem'
                                profileIcon={<Person2OutlinedIcon />}
                                location={<LocationOnOutlinedIcon />}
                                height='8px'
                                link={
                                    <div className='block-content-join-now'>
                                        <Link
                                            width='11.25rem'
                                            paddingTop='13px'
                                            paddingBottom='13px'
                                            Label='Join now'
                                            href='/'
                                        />
                                    </div>
                                }
                                paddingLeft='30px'
                                paddingRight='30px'
                                paddingTop='20px'
                                socialLink={
                                    <div className='blocker-content-apple-google-buttons'>
                                        <SocialLink img='https://www.eqbank.ca/images/default-source/svgs/download_on_the_app_store_badge.svg?sfvrsn=fe69bfd3_14' />
                                        <SocialLink img='https://www.eqbank.ca/images/default-source/svgs/get_it_on_google_play.svg?sfvrsn=fb69bfd3_30' />
                                    </div>
                                }
                            />
                        }
                    />
                }
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
                backgroundColor='#fff'
                alignItems='center'
                borderBottom='2px solid #ccc'
                topNavBar={
                    <TopNavBarContent
                        data={topNavBarData}
                        dropNav={
                            <NavBarDropdown
                                backgroundColor='rgb(255, 230, 0)'
                                dataLabelItems={provincesDropdownLabels}
                                title='ON'
                                open={iconOpen}
                                top='100%'
                                left='-25px'
                                paddingTop='10px'
                                selectAProvince='Select a Province'
                            />
                        }
                    />
                }
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
