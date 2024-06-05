import React from 'react'
import Item from './Item'

const ItemList = ({materias}) => {
  return (
    <div>
      <div className="productos">
        {materias.map((prod)=> <Item materia={prod} key={prod.materia_id}/>)}
      </div>
    </div>
  )
}

export default ItemList
