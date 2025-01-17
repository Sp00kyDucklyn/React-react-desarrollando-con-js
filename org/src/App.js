import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

function App() {

  const  [mostrarFormulario, actualizarMostrar] = useState(true); 

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Corto circuito --> condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header/>
      {/* Ternario {mostrarFormulario ? <Formulario/> : <></>} */}
      {/*Corto circuito*/}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
