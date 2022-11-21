import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [open, setOpen] = useState(false);
    const [menuTitle, setMenuTitle] = useState('SHOP');
    const [openCloseMenu, setOpenCloseMenu] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [iconOpen, setIconOpen] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [isHover, setIsHover] = useState(false);
    const [navItemLabelHover, setNavItemLabelHover] = useState(false);
    const [navItems, setNavItems] = useState('SHOP');

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    const leftNavBarSwitchLabel = (menuTitle) => {
        switch (menuTitle) {
            case 'SHOP':
                setMenuTitle('SHOP');
                setOpen(!open);
                break;
            case 'MY ACCOUNT':
                setMenuTitle('MY ACCOUNT');
                break;
            case 'SUPPORT':
                setMenuTitle('SUPPORT');
                break;
            default:
                setMenuTitle('SHOP');
        }
    };

    const handleNavItemMouseEnter = (navItems) => {
        switch (navItems) {
            case 'SHOP':
                setNavItems('SHOP');
                setNavItemLabelHover(true);
                break;
            case 'MY ACCOUNT':
                setNavItems('MY ACCOUNT');
                setNavItemLabelHover(true);
                break;
            case 'SUPPORT':
                setNavItems('SUPPORT');
                setNavItemLabelHover(true);
                break;
            default:
                setNavItems('SHOP');
        }
    };

    const handleNavItemMouseLeave = () => {
        setNavItemLabelHover(false);
    };

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const iconOpenToggle = () => {
        setIconOpen(!iconOpen);
    };

    const sideBarToggle = () => {
        setToggle(!toggle);
    };

    const handleShow = () => {
        setShow(true);
    };
    const closeShow = () => {
        setShow(false);
    };

    const openCloseMenuToggler = () => {
        setOpenCloseMenu(!openCloseMenu);
    };
    return (
        <MainContext.Provider
            value={{
                menuTitle,
                setMenuTitle,
                open,
                setOpen,
                openCloseMenu,
                openCloseMenuToggler,
                show,
                handleShow,
                closeShow,
                toggle,
                sideBarToggle,
                setToggle,
                matches,
                iconOpenToggle,
                iconOpen,
                isHover,
                handleMouseEnter,
                handleMouseLeave,
                navItemLabelHover,
                handleNavItemMouseEnter,
                handleNavItemMouseLeave,
                navItems,
                leftNavBarSwitchLabel,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
