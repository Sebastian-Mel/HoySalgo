import React, { Component } from 'react';
import {connect} from "react-redux";

//importo mis componentes
import Login from "./Login/Login";
import CambioContrasenia from './Login/CambioContrasenia';
import Inicio from './Inicio/Inicio';
import Contacto from './Contacto/Contacto';
import NuevoNegocio from './Negocio/NuevoNegocio';
import EditarNegocio from './Negocio/EditarNegocio';
import Negocios from './NegociosCategoria/Negocios';
import DetalleNegocio from './Negocio/DetalleNegocio';
import MisDatos from './MisDatos/MisDatos';


import Reservas from './Reservas/Reservas';

class Aplicacion extends Component
{
    render() 
    {

        switch(this.props.mostrar)
        {
            case 'Inicio':
                return <Inicio/>; 
            case 'Login':
                return <Login/>;  
            case 'Contacto':
                return <Contacto/>;   
            case 'NuevoNegocio':
                return <NuevoNegocio/>; 
            case 'Reservas':
                return <Reservas/>; 
            case 'EditarNegocio':
                return <EditarNegocio/>; 
            case 'DetalleNegocio':
                return <DetalleNegocio/>;
            case 'CambioContrasenia':
                return <CambioContrasenia/>;
            case 'MisDatos':
                return <MisDatos/>;
            case 'NegociosDeCategoria':
                return <Negocios/>; 
            default:
                return <Inicio/>;
        }
    }
}

function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar
    };
}

export default connect(mapStateToProps)(Aplicacion);