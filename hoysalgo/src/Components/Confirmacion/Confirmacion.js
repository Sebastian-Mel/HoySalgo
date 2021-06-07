import React, { Component } from 'react'
import {connect} from "react-redux";
import {confirmarCuenta} from "../../Services/Services"
import img from "../../normal.png";
import "./estiloConfirmacion.css";

class Confirmacion extends  Component
{
    componentDidMount()
    { 
        confirmarCuenta(this.props.match.params.id).then((respuesta)=>{});
    }

    IrALogin= c =>
    {
        this.props.history.push('/Login');
    }

    render() {
        return (
            <div id="fondo">
                <img src={img}/>
                <div id="divTexto">
                    <h1>Su cuenta ha sido confirmada</h1>
                    <div className="volver">
                        <button type="button" onClick={() => this.IrALogin("Login")} className="btn btn-outline-secondary">ENTRAR</button>
                    </div>
                    
                </div>
               
            </div>
         )
  }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(Confirmacion);