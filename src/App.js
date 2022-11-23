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
import { shopDropdownLabels } from './Data/NavbarLabel';
import { provincesDropdownLabels } from './Data/Provinces';
import { billsDropdownLabels } from './Data/NavbarLabel';
import TextField from './Components/Atoms/TextField/TextField';
import SearchIcon from './Components/Atoms/SearchIcon/SearchIcon';

function App() {
    const {
        menuTitle,
        open,
        handleShow,
        iconOpen,
        matches,
        show,
        closeShow,
        handleMouseEnter,
        handleMouseLeave,
        isHover,
    } = useContext(MainContext);

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
                                bottom='-468px'
                            />
                        }
                    />
                }
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
                searchOpenAndClose={
                    <NavBarDropdown
                        backgroundColor='#fff'
                        dataLabelItems={billsDropdownLabels}
                        title='Slide'
                        open={show}
                        bottom='-135px'
                        left='1240px'
                        closeShow={closeShow}
                        textField={
                            <TextField
                                value={''}
                                placeholder='Search'
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
                                bottom='-462px'
                                left='800px'
                                paddingTop='30px'
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
