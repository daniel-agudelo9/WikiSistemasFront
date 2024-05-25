import React, { useState } from 'react';
import '../App.css';
import ListNivel from './ListNivel';

const HamburguesaMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <ListNivel closeMenu={closeMenu} />
            </div>
        </div>
    );
};

export default HamburguesaMenu;




