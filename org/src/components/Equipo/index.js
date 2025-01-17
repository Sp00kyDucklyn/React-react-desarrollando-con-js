import React from "react";
import './Equipo.css';
import hexToRgba from 'hex-to-rgba';
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    //Destructuración de props
    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor} = props;
    

    const estiloFondo = {
        backgroundColor: hexToRgba(colorPrimario,0.2)
    };

    const estiloTitulo = {
        borderColor: colorPrimario
    };

    return <>
        { 
            colaboradores.length > 0 &&
                <section className="equipo" style={estiloFondo}>
                    <input
                        type="color"
                        className = "input-color"
                        value={colorPrimario}
                        onChange={(e) => {
                            actualizarColor(e.target.value, id);
                        }}
                    />
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map( (colaborador,index) => <Colaborador 
                                datos={colaborador} 
                                key={index} 
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                />)
                        }
                    </div>
            </section>
        }
    </>
}

export default Equipo;