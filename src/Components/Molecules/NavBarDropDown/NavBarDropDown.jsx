import React from 'react';
import './NavBarDropDown.css';

function NavBarDropdown({
    title,
    backgroundColor,
    dataLabelItems,
    open,
    bottom,
    left,
    closeShow,
    textField,
}) {
    return (
        <>
            {open && title ? (
                <>
                    <div
                        style={{
                            backgroundColor: backgroundColor,
                            bottom: bottom,
                            left: left,
                            display: textField? 'flex': null,
                            flexDirection: textField? 'column': null,
                        }}
                        className='link-drop-down'
                        onClick={closeShow}
                    >
                        {textField}
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
