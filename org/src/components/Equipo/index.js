import React from "react";
import './Equipo.css';
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    //Destructuración de props
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const {colaboradores} = props;
     

    const estiloFondo = {
        backgroundColor: colorSecundario
    };

    const estiloTitulo = {
        borderColor: colorPrimario
    };

    return <>
        { 
            colaboradores.length > 0 &&
                <section className="equipo" style={estiloFondo}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;