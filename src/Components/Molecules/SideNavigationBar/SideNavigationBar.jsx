import React, { useState } from 'react';
import './SideNavigationBar.css';
import Link from '../../Atoms/Link/Link';
import SocialButton from '../../Atoms/SocialLink/SocialLink';
import { navInfo } from '../../../Data/NavbarLabel';

function SideNavigationBar({ socialLink, link }) {
    const [clicked, setClicked] = useState('0');

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };

    return (
        <>
            <div>
                <nav>
                    <ul className='nav-list'>
                        {navInfo.map((navItem, idx) => (
                            <div key={idx}>
                                <div
                                    style={{
                                        padding: '25px 20px 25px 20px',
                                        backgroundColor:
                                            navItem.mainLabel.mainLabelName === 'Contact us' ||
                                            navItem.mainLabel.mainLabelName === 'Français'
                                                ? '#fafafa'
                                                : null,
                                        borderBottom: '1px solid #ccc',
                                    }}
                                >
                                    <li
                                        onClick={() => handleToggle(idx)}
                                        className='list-item'
                                        style={{
                                            pointerEvents:
                                                navItem.mainLabel.mainLabelName === 'Sign in' ||
                                                navItem.mainLabel.mainLabelName ===
                                                    'Education Centre' ||
                                                navItem.mainLabel.mainLabelName === 'Contact us' ||
                                                navItem.mainLabel.mainLabelName === 'Français'
                                                    ? 'none'
                                                    : '',
                                        }}
                                    >
                                        <a href='/'>{navItem.mainLabel.mainLabelName}</a>

                                        {navItem.mainLabel.mainLabelName !== 'Sign in' &&
                                            navItem.mainLabel.mainLabelName !== 'Contact us' &&
                                            navItem.mainLabel.mainLabelName !==
                                                'Education Centre' &&
                                            navItem.mainLabel.mainLabelName !== 'Français' && (
                                                <span className='toggle-button'>
                                                    <img
                                                        src={
                                                            clicked === idx
                                                                ? 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-up.svg'
                                                                : 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-down.svg'
                                                        }
                                                        className='toggle-button-arrow '
                                                        alt=''
                                                    />
                                                </span>
                                            )}
                                    </li>
                                </div>
                                {clicked === idx ? (
                                    <div style={{ backgroundColor: '#fafafa' }}>
                                        <ul
                                            className={
                                                navItem.mainLabel.mainLabelName ===
                                                'Personal banking'
                                                    ? 'secondary-nav-list'
                                                    : 'secondary-nav-list-no-scroll'
                                            }
                                        >
                                            {navItem.mainLabel.subTitle?.map((name, id) => (
                                                <li key={id}>
                                                    {name.name}
                                                    {
                                                        <ul className='inner-sub-list'>
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
                   {!link?link: null}
                  {!socialLink?socialLink: null}
                </div>
            </div>
        </>
    );
}

export default SideNavigationBar;
