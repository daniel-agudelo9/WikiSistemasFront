import React from 'react'
import Item from './Item'
import '../style/Materias.css';

const ItemList = ({materias}) => {
  return (
    <div >
      <div className="materias-list">
        {materias.map((prod)=> <Item materia={prod} key={prod.materia_id}/>)}
      </div>
    </div>
  )
}

export default ItemList
