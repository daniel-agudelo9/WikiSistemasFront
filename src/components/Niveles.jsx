import  { useState, useEffect } from 'react'
import ItemList from './ItemList';
import {  pedirMaterias } from './../helpers/pedirDatos';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


const Niveles = () => {

  const [materias,setMaterias] = useState([])
  const {nivel} = useParams();
  console.log(nivel)

    useEffect(() => { 
        pedirMaterias(nivel)
            .then((res)=>{
                setMaterias(res)
            })
    }, [nivel])

  return (
    <div className='container'>
      <div className='materias-container'>
        <h1 className='main-title'>Materias: Semestre {nivel}</h1>
        <ItemList materias={materias}/>
      </div>
    
    </div>
  )
}

export default Niveles