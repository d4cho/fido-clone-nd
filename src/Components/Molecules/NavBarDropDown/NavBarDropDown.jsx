import React from 'react';
import './NavBarDropDown.css';

function NavBarDropdown({
    title,
    backgroundColor,
    dataLabelItems,
    open,
    top,
    left,
    closeShow,
    textField,
    paddingTop,
    selectAProvince,
    marginTop,
    marginBottom,
}) {
    return (
        <>
            {open && title ? (
                <>
                    <div
                        style={{
                            backgroundColor: backgroundColor,
                            top: top,
                            left: left,
                            display: textField ? 'flex' : null,
                            flexDirection: textField ? 'column' : null,
                            paddingTop: paddingTop,
                        }}
                        className='link-drop-down'
                        onClick={closeShow}
                    >
                        {textField}
                        <ul
                            style={{ marginBottom: marginBottom, marginTop: marginTop }}
                            className='main-content'
                        >
                            {selectAProvince && (
                                <span
                                    style={{
                                        borderBottom: selectAProvince ? '1px solid black' : null,
                                        paddingBottom: selectAProvince ? '10px' : null,
                                    }}
                                >
                                    {selectAProvince}
                                </span>
                            )}
                            {dataLabelItems.map((navDropItem, idx) => (
                                <span key={idx}>
                                    <li
                                        style={{
                                            backgroundColor:
                                                navDropItem.title === 'Ontario' ? 'black' : null,
                                            padding:
                                                navDropItem.title === 'Ontario'
                                                    ? '10px 30px 10px 10px'
                                                    : null,
                                        }}
                                        className='nav-drop-item'
                                    >
                                        <a
                                            style={{
                                                color:
                                                    navDropItem.title === 'Ontario'
                                                        ? 'white'
                                                        : null,
                                            }}
                                            href={navDropItem.href}
                                        >
                                            {navDropItem.title}
                                        </a>
                                    </li>
                                </span>
                            ))}
                        </ul>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default NavBarDropdown;
