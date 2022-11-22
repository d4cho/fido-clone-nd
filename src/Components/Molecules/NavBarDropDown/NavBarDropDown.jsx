import React from 'react';
import './NavBarDropDown.css';

function NavBarDropdown({ title, backgroundColor, dataLabelItems, open, bottom, left }) {
    return (
        <>
            {open && title ? (
                <>
                    <div
                        style={{ backgroundColor: backgroundColor, bottom: bottom, left: left }}
                        className='link-drop-down'
                    >
                        <ul className='main-content'>
                            {dataLabelItems.map((navDropItem, idx) => (
                                <div key={idx}>
                                    <li>
                                        <a className='nav-drop-item' href={navDropItem.href}>
                                            {navDropItem.title}
                                        </a>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default NavBarDropdown;
