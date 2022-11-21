import React, { useContext } from 'react';
import './NavBarDropDown.css';
import { MainContext } from '../../../Context/MainContext';
function NavBarDropdown({title}) {
    const { menuTitle, open} = useContext(MainContext);
    return (
        <>
            {open && menuTitle === title ? (
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

export default NavBarDropdown
