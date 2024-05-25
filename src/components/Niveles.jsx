import  { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { pedirDatos } from './../helpers/pedirDatos';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Niveles = ({nivel}) => {

  const [materias,setMaterias] = useState([])

    useEffect(() => { 
        pedirDatos(nivel)
            .then((res)=>{
                setMaterias(res)
            })
    }, [nivel])
  return (
    <div>
      <div className='container'>
        <h1 className='main-title'>Materias: Nivel {nivel}</h1>
        <ItemList materias={materias}/>
      </div>
    
    </div>
  )
}

export default Niveles