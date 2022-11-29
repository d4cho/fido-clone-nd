import React, { useContext } from 'react';
import './SideBarDrawer.css';
import { MainContext } from '../../../Context/MainContext';
import SideNavigationBar from '../../Molecules/SideNavigationBar/SideNavigationBar';
import Backdrop from '../Backdrop/Backdrop';
import SocialLink from '../../Atoms/SocialLink/SocialLink';
import Link from '../../Atoms/Link/Link';
import { navInfo } from '../../../Utils/NavbarLabel';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function SideBarDrawer({ height }) {
    const { toggle, setToggle } = useContext(MainContext);

    const backdropHandler = () => {
        setToggle(false);
    };

    let drawerClass = 'side-bar-drawer';
    let backDrop;
    if (toggle) {
        drawerClass = 'side-bar-drawer open';
        backDrop = <Backdrop backdropHandler={backdropHandler} />;
    }
    return (
        <>
            <div className={drawerClass} style={{ height: height }}>
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
                {!backDrop}
            </div>
        </>
    );
}

export default SideBarDrawer;
