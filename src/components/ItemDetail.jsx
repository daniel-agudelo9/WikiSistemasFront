import React from 'react'
import Recursos from './Recursos'
import { useAuth } from '../context/auth';

const ItemDetail = ({item}) => {

  const auth = useAuth();
  const user= auth.getMe();
  return (
    <div className='container'>
        <div className='producto'>
            <div>
                <h1 className='main-title'>{item.nombre}</h1>
                <h3 className='main-title'>Codigo: {item.codigo}</h3>
                <h3 className='main-title'>Creditos: {item.creditos}</h3>
                <h3 className='main-title'>Descripcion: {item.descripcion}</h3>
            </div>
        </div> 
        { user &&
        <Recursos/>
        }
    </div>
  )
}

export default ItemDetail
