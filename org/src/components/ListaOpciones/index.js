import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = () => {

    /*Utilizamos un método map para recorrer el arreglo -> arreglo.map( (equipo, index) => {
            return  <option> map </option>
        } )
        */
    const equipos = [
        "Programación",
        "Front Ent",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select default="Seleccionar equipo">
            {equipos.map(
                (equipo, index) => <option key={index}>{equipo}</option>
            )}
        </select>
    </div>

}

export default ListaOpciones;
