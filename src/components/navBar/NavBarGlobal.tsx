'use client';
import NavBarBureau from './NavBarBureau';
import NavBarTel from './NavBarTel';
import { useState } from 'react';

const NavBarGlobal = () => {
    const [visible, setVisible] = useState(true);

    const handleNavBar = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <NavBarBureau visible={visible} switchNavBar={handleNavBar} />
            <NavBarTel visible={!visible} switchNavBar={handleNavBar} />
        </div>
    );
};

export default NavBarGlobal;
