import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [open, setOpen] = useState(false);
    const [menuTitle, setMenuTitle] = useState('SHOP');
    const [openCloseMenu, setOpenCloseMenu] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

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
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
