import React, { useContext } from "react";
import "./SideBarDrawer.css";
import { MainContext } from "../../../Context/MainContext";
import SideBarMobileSearchBar from "../../Atoms/SideBarSearchBar/SideBarSearchBar";
import SideNavigationBar from "../../Molecules/SideNavigationBar/SideNavigationBar";
import Backdrop from "../Backdrop/Backdrop";
import SocialLink from "../../Atoms/SocialLink/SocialLink";
import Link from "../../Atoms/Link/Link";

function SideBarDrawer() {
  const { toggle, setToggle } = useContext(MainContext);
  
  const backdropHandler = () => {
    setToggle(false);
  };

  let drawerClass = "side-bar-drawer";
  let backDrop;
  if (toggle) {
    drawerClass = "side-bar-drawer open";
    backDrop =  <Backdrop backdropHandler={backdropHandler}/>
  }
  return (
      <>
          <div className={drawerClass}>
              <SideBarMobileSearchBar />
              <SideNavigationBar
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
