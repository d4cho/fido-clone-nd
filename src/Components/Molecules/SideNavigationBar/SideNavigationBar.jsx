import React, { useState } from 'react';
import './SideNavigationBar.css';

function SideNavigationBar({
    socialLink,
    link,
    navInfo,
    color,
    padding,
    fontSize,
    profileIcon,
    location,
    height,
    paddingLeft,
    paddingTop,
    paddingRight,
}) {
    const [clicked, setClicked] = useState('0');

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };

    return (
        <>
            <div
                style={{
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    paddingTop: paddingTop,
                }}
            >
                <nav>
                    <ul className='nav-list' style={{ fontSize: fontSize }}>
                        {navInfo.map((navItem, idx) => (
                            <div key={idx}>
                                <div
                                    style={{
                                        padding: padding,
                                        marginTop:
                                            navItem.mainLabel.mainLabelName === 'Shop' ||
                                            navItem.mainLabel.mainLabelName === 'Ontario'
                                                ? '10px'
                                                : null,
                                        borderBottom:
                                            navItem.mainLabel.mainLabelName === 'Ontario' ||
                                            navItem.mainLabel.mainLabelName === 'Find a Store'
                                                ? '1px solid black'
                                                : navItem.mainLabel.mainLabelName === 'Français'
                                                ? null
                                                : '1px solid #ccc',
                                    }}
                                >
                                    <li
                                        onClick={() => handleToggle(idx)}
                                        className='list-item'
                                        style={{
                                            pointerEvents:
                                                navItem.mainLabel.mainLabelName === 'Sign in' ||
                                                navItem.mainLabel.mainLabelName === 'My Account' ||
                                                navItem.mainLabel.mainLabelName === 'Support' ||
                                                navItem.mainLabel.mainLabelName === 'Français' ||
                                                navItem.mainLabel.mainLabelName === 'Find a Store'
                                                    ? 'none'
                                                    : '',
                                            display: 'flex',
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '5px',
                                            }}
                                        >
                                            {navItem.mainLabel.mainLabelName === 'Sign in'
                                                ? profileIcon
                                                : navItem.mainLabel.mainLabelName === 'Find a Store'
                                                ? location
                                                : null}
                                            {navItem.mainLabel.mainLabelName}{' '}
                                        </span>

                                        {navItem.mainLabel.mainLabelName !== 'Sign in' &&
                                            navItem.mainLabel.mainLabelName !== 'My Account' &&
                                            navItem.mainLabel.mainLabelName !== 'Support' &&
                                            navItem.mainLabel.mainLabelName !== 'Find a Store' &&
                                            navItem.mainLabel.mainLabelName !== 'Français' && (
                                                <span className='toggle-button'>
                                                    <img
                                                        src={
                                                            clicked === idx
                                                                ? 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-up.svg'
                                                                : 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-down.svg'
                                                        }
                                                        style={{ height: height }}
                                                        alt=''
                                                    />
                                                </span>
                                            )}
                                    </li>
                                </div>
                                {clicked === idx ? (
                                    <div>
                                        <ul className='secondary-nav-list'>
                                            {navItem.mainLabel.subTitle?.map((name, id) => (
                                                <li key={id}>
                                                    {name.name}
                                                    {
                                                        <ul
                                                            style={{ color: color }}
                                                            className='inner-sub-list'
                                                        >
                                                            {name.links.map((link, id) => (
                                                                <div key={id}>
                                                                    <li>{link}</li>
                                                                </div>
                                                            ))}
                                                        </ul>
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </ul>
                </nav>
                <div className='blocker-content'>
                    {!link ? link : null}
                    {!socialLink ? socialLink : null}
                </div>
            </div>
        </>
    );
}

export default SideNavigationBar;
