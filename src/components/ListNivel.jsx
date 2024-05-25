import React from 'react';
import { Link } from 'react-router-dom';

const ListNivel = ({ closeMenu }) => {
    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <div className='container'>
            <ul>
                <li><Link className='menu-link' to="/Niveles/1" onClick={handleLinkClick}>Nivel 1</Link></li>
                <li><Link className='menu-link' to="/Niveles/2" onClick={handleLinkClick}>Nivel 2</Link></li>
                <li><Link className='menu-link' to="/Niveles/3" onClick={handleLinkClick}>Nivel 3</Link></li>
                <li><Link className='menu-link' to="/Niveles/4" onClick={handleLinkClick}>Nivel 4</Link></li>
                <li><Link className='menu-link' to="/Niveles/5" onClick={handleLinkClick}>Nivel 5</Link></li>
                <li><Link className='menu-link' to="/Niveles/6" onClick={handleLinkClick}>Nivel 6</Link></li>
                <li><Link className='menu-link' to="/Niveles/7" onClick={handleLinkClick}>Nivel 7</Link></li>
                <li><Link className='menu-link' to="/Niveles/8" onClick={handleLinkClick}>Nivel 8</Link></li>
                <li><Link className='menu-link' to="/Niveles/9" onClick={handleLinkClick}>Nivel 9</Link></li>
                <li><Link className='menu-link' to="/Niveles/10" onClick={handleLinkClick}>Nivel 10</Link></li>
            </ul>
        </div>
    );
};

export default ListNivel;

