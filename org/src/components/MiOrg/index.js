import React from 'react';
import {useState} from 'react';
import './MiOrg.css';

const MiOrg = (props) => {

    //Estado - hooks 
    /* useState
       useState()

    */

    console.log(props);
    //const [estado, funcion] = useState(valorInicial);
    //const [nombre, actualizarNombre] = useState(true);
    // const manejarClick = () =>{
    //  console.log("Mostrar/Ocultar elemento");
    // }

    return <section className='orgSection'>
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="agregar" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;