import React, { useContext } from 'react';
import './NavBarDropDown.css';
import { MainContext } from '../../../Context/MainContext';
function NavBarDropdownContent() {
    const { menuTitle, open} = useContext(MainContext);
    return (
        <>
            {open && menuTitle === 'SHOP' ? (
                <>
                    <div className='link-drop-down'>
                        <ul className='main-content'>
                          <li>welcome</li>
                        </ul>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default NavBarDropdownContent;
