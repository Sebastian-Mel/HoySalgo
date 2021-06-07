import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom"

import { misNegocios} from "../../Services/Services";
import DropdownitemNegocio from "./DropdownitemNegocio";

class MenuUsuario extends Component
{
    componentDidMount()
    {
        window.scrollTo(0, 0);
        let token = localStorage.getItem('access_token'); 
        if(token !== null && token !== "")
        {        
            misNegocios(token).then((respuesta) =>
            {              
                this.props.dispatch({type:"CargarMisNegocios", payload:respuesta.message});      
            }) 
        }        
    }

    Salir = s =>
    {
        localStorage.clear();
    }

    IrA= c =>
    {
        this.props.dispatch({type:c});    
    }

    render() {
        return (
            <>   
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link  to="/" className="nav-link btn btn-link" >
                            Inicio 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/Contacto" className="nav-link btn btn-link">
                            Contactanos
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link  to="/Reservas" className="nav-link btn btn-link" role="button"  >
                            Reservas
                        </Link>
                    </li> 
                    <li className="nav-item ">
                        <Link  to="/MisDatos" className="nav-link btn btn-link" role="button"  >
                            Mis datos
                        </Link>
                    </li>                   
                    <li className="nav-item dropdown btn-link">
                        <a href className="nav-link btn btn-link" role="button" data-toggle="dropdown">
                            Negocios
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/NuevoNegocio" >Nuevo Negocio</Link>                           
                                {this.props.todosMisNegocios.map((minegocio,id) => <DropdownitemNegocio key = {id} {...minegocio}/>)}
                        </div>
                    </li>                   
                    <li className="nav-item ">
                        <Link  to="/Login" onClick={() => this.Salir()} className="nav-link btn btn-link" role="button"  >
                            Salir
                        </Link>
                    </li>
                </ul>           
            </>
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,  
        todosMisNegocios : state.todosMisNegocios,     
    };
}
export default connect(mapStateToProps)(MenuUsuario);