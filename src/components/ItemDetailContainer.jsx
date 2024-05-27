import React from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({nivel}) => {

    const[item,setItem] = useState(null);
    const id=useParams().id;

    useEffect(() => {
      pedirItemPorId(Number(id),nivel)
       .then((res) =>{
        setItem(res);
       })
    }, [])
    
  return (
    <div>
        {
            item && <ItemDetail item={item}/>
        }
    </div>
  )
}

export default ItemDetailContainer