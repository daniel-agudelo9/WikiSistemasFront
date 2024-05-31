import React from 'react'
import { pedirMateria } from '../helpers/pedirDatos'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const[item,setItem] = useState(null);
    const {id}= useParams();

    useEffect(() => {
      pedirMateria(id)
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