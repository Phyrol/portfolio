import React, { useEffect, useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';

function HamburgerContainer() {

    const [menuActive, setMenuActive] = useState(false);

    const handleClick = (e) => {
        setMenuActive(menuActive ? false : true);
    }

    useEffect(() => {
        document.body.className = menuActive ? 'blur' : '';
    }, [menuActive])

    return(
        <HamburgerMenu onClick={handleClick} menuActive={menuActive}/>
    );
}

export default HamburgerContainer;