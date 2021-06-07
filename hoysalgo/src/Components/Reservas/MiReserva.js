import React, { Component } from 'react';
import {cambiarEstadoReserva} from "../../Services/Services";
import Loading from '../PreLoader/Loading'


class MiReserva  extends Component
{
    constructor()
    {  
        super();
        this.state = {          
            mensaje:"",
            preloader:false
        };
    } 

    chequearEstado = (estadoActual,estadoCambiar) =>
    {
        return estadoCambiar==="CANCELADA" 
        || (estadoActual==="PENDIENTE_CUPOS" && estadoCambiar ==="CONFIRMADA")
        || (estadoActual==="PENDIENTE_CUPOS" && estadoCambiar ==="RECHAZADA") 
        || (estadoActual==="PENDIENTE" && estadoCambiar === "PENDIENTE_CUPOS" )
        || (estadoActual==="PENDIENTE" && estadoCambiar === "RECHAZADA" )
        || (estadoActual==="PENDIENTE" && estadoCambiar === "CONFIRMADA" ) 
        || (estadoActual==="CONFIRMADA" && estadoCambiar === "NO_ASIST" )
        || (estadoActual==="CONFIRMADA" && estadoCambiar === "ASISTIO" );
    }

    CambiarEstadoReserva = (id_reserva,estado_anterior,estado_nuevo) =>
    {
        this.setState({preloader:true});
        if(this.chequearEstado(estado_anterior,estado_nuevo))
        {
            let token = localStorage.getItem('access_token'); 
            if(token !== null && token !== "")
            {                   
                if(id_reserva !== '' && estado_nuevo !== '')
                {
                    cambiarEstadoReserva({
                        token:token,id_reserva:id_reserva,estado_nuevo:estado_nuevo               
                    }).then((respuesta) =>
                    {        
                        if(respuesta.cod_error === 200)
                        {                        
                            this.setState({mensaje:respuesta.message,preloader:false});
                            this.props.cargarReservas(); 
                        }
                        else
                        {
                            this.setState({mensaje:"Ocurrio un error al actualizar tu reserva!",preloader:false});
                        }                
                    })          
                }
                else
                {
                    this.setState({mensaje:'Existen datos vacios, verifique!!',preloader:false});
                }
            }
            else
            {
                this.setState({mensaje:'No es posible actualizar un negocio sin entrar!',preloader:false});
            }
        }        
    }

    render() {
        let {id,nombre,fecha_hora,cant_personas,comentario,estado}=this.props;

        let btnCancelar = <button type="button" className="btn btn-success mibtn" onClick={(event) => this.CambiarEstadoReserva(id,estado,"CANCELADA")}>CANCELAR RESERVA</button>;
        
        this.ifCancelar=false;
        if(estado === "PENDIENTE" || estado === "PENDIENTE_CUPOS")
        {
            this.ifCancelar=true;
        }
       
        return (            
            <tr>     
                <td className="align-middle">{nombre}</td>       
                <td className="align-middle">{fecha_hora}</td>
                <td className="align-middle">{cant_personas}</td>                
                <td className="align-middle coment">{comentario}</td>
                <td className="align-middle">{estado}</td>  
                <td className="align-middle"> 
                    {(this.ifCancelar)?btnCancelar:null} 
                </td>   
                <Loading show={this.state.preloader}/>                                   
            </tr>
        );
    }
}

export default MiReserva ;