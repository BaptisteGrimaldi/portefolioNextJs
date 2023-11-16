'use client';
import NavBarBureau from './NavBarBureau';
import NavBarPhone from './NavBarPhone';
import { useState } from 'react';

const NavBarGlobal = () => {
    const [visible, setVisible] = useState(true);

    const handleNavBar = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <NavBarBureau visible={visible} switchNavBar={handleNavBar} />
            <NavBarPhone visible={!visible} switchNavBar={handleNavBar} />
        </div>
    );
};

export default NavBarGlobal;
