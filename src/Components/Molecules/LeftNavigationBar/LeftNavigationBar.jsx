import React,{useContext} from 'react';
import './LeftNavigationBar.css';
import { leftNavbarLabels } from '../../../Data/NavbarLabel';
import { MainContext } from '../../../Context/MainContext';
import SearchIcon from '../../Atoms/SearchIcon/SearchIcon';

function LeftNavigationBar({ leftNavBarSwitchLabel, menuTitle, open, marginLeft, color }) {
    const { handleShow } = useContext(MainContext);
    return (
        <>
            <div className='left-navbar-container'>
                <nav>
                    <ul className='menu-items'>
                        {leftNavbarLabels.map((leftNavItem, idx) => (
                            <div key={idx}>
                                <li onClick={() => leftNavBarSwitchLabel(leftNavItem)} >
                                    <span
                                        style={
                                            menuTitle === leftNavItem && open
                                                ? { color: color }
                                                : null
                                        }
                                        className='align-name-title'
                                    >
                                        {leftNavItem !== 'SHOP' ? (
                                            <a href='/Plans'>{leftNavItem}</a>
                                        ) : (
                                            <>{leftNavItem}</>
                                        )}
                                        {leftNavItem === 'SHOP' && (
                                            <span
                                                className={
                                                    open && menuTitle === leftNavItem
                                                        ? 'arrow-up'
                                                        : 'arrow-down'
                                                }
                                            />
                                        )}
                                    </span>

                                    <div
                                        className={
                                            menuTitle === !leftNavItem && open ? 'active' : null
                                        }
                                    />
                                </li>
                            </div>
                        ))}
                        <li
                            onClick={handleShow}
                            className='search-button'
                            style={{ marginLeft: marginLeft? marginLeft: null}}
                        >
                            <SearchIcon/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default LeftNavigationBar;
