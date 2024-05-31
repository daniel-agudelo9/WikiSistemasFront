import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../utils/constans';


const ListNivel = ({ closeMenu }) => {
    const handleLinkClick = () => {
        closeMenu();
    };

    const [semestres, setSemestres] = useState([]);

    useEffect(() => {
      fetch(baseUrl+"/semestres")
        .then(response => response.json())
        .then(data => {setSemestres(data)
            console.log(data)
        })
    }, [])
    


    return (
        <div className='container'>
            <ul>
                {semestres.map((semestre) => (
                    <li key={semestre.semestre_id}>
                        <Link className='menu-link' to={`/Niveles/${semestre.semestre_id}`} onClick={handleLinkClick}>{semestre.nombre}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListNivel;

