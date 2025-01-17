import React from 'react';
import {useState} from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
    // Modificamos el placeholder haciendo una insercion de html para agregarle los tres puntos
    //const [valor, actualizarValor] = useState("");
    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) =>{
        console.log("Cambio",e.target.value);
        //Para que cada que escribamos algo en el teclado actualice la palabra
        props.actualizarValor(e.target.value);
    }

    
    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required = {props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
} 

export default CampoTexto;