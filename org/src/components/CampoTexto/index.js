import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
    // Modificamos el placeholder haciendo una insercion de html para agregarle los tres puntos
    const placeholderModificado = `${props.placeholder}...`;
    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required = {props.required}/>
    </div>
} 

export default CampoTexto;