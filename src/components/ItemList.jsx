import React from 'react'
import Item from './Item'

const ItemList = ({materias}) => {
  return (
    <div>
      <div className="productos">
        {materias.map((prod)=> <Item materia={prod} key={prod.id}/>)}
      </div>
    </div>
  )
}

export default ItemList
