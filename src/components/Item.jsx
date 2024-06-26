import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({materia}) => {
  return (
    <div className='producto'>
        <div>
            <h4>{materia.nombre}</h4>
            <p>Codigo: {materia.codigo}</p>
            <p>Creditos: {materia.creditos}</p>
            <Link className='ver-mas' to={`/item/${materia.materia_id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item