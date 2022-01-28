import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Digimon from './Digimon.js'
import {getAllDigimons } from '../redux/actions/index.js'
export default function Main() {

  const digimons = useSelector(state => state.digimons)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllDigimons())
  },[])


  return <div>
    {
      digimons.length > 0 ? 
      digimons.map(digi => <Digimon name={digi.name}  color={digi.color} id={digi.id}  key={digi.id}/>)
      
      :
      <div>Cargando... </div>
    }
  
  </div>;
}
