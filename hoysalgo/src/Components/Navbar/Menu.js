import React, { Component } from "react";
import {connect} from "react-redux";

import Entrar from './Entrar';
import MenuUsuario from "./MenuUsuario";
import MenuAdministrador from './MenuAdministrador';

class Menu extends  Component
{
    /**
     * Cuando el componente se termino de cargar verifica los datos en el local storage
     * */
    componentDidMount()
    {
        //si el usuario ya esta logado, miramos quien es (admin/user)
        let access_token = localStorage.getItem('access_token'); 
        if(access_token !== null && access_token !== "")
        {        
        
        this.setState({mostrar:'menuPrincipal'});
        // si el rol lo amerita le mostramos el menu de administrador
        }
    }

    constructor()
    {
        super();
        this.state = 
                    {
                        mostrar:'Entrar'
                    };
    }

    IrA= c =>
    {
    this.props.dispatch({type:c});    
    }

    Salir = s =>
    {
        localStorage.clear();
        this.props.dispatch({type:"Inicio"});
    }

    render() 
    {
        switch(this.state.mostrar)
        {
            case 'menuPrincipal':
                return <MenuUsuario cargarNegocio={this.props.cargarNegocio}/>; 
             
            default:
                return <Entrar/>;
        }
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(Menu);