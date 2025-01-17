import React from "react";
import {useState} from 'react';
import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    /*Utilizamos un método map para recorrer el arreglo -> arreglo.map( (equipo, index) => {
            return  <option> map </option>
        } )
        */
    


    const manejarCambio = (e) => {
        //console.log("cambio");
        props.actualizarEquipo(e.target.value);
    } 

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map(
                (equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}
        </select>
    </div>

}

export default ListaOpciones;
