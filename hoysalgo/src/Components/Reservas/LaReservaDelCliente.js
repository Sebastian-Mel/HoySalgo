import React, { Component } from 'react';
import {cambiarEstadoReserva} from "../../Services/Services";
import Loading from '../PreLoader/Loading'

class LaReservaDelCliente extends Component
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

    render()
    {
        let {id,negocio,telefono,cliente,fecha_hora,cant_personas,comentario,estado}=this.props;

        let btnConfirmar = <button type="button" className="btn btn-success mibtn" onClick={(event) => this.CambiarEstadoReserva(id,estado,"CONFIRMADA")}>CONFIRMAR</button>;
        let btnPendienteCupos = <button type="button" className="btn btn-secondary mibtn"onClick={(event) => this.CambiarEstadoReserva(id,estado,"PENDIENTE_CUPOS")}>PENDIENTE CUPOS</button>;
        let btnRechazar = <button type="button" className="btn btn-danger mibtn" onClick={(event) => this.CambiarEstadoReserva(id,estado,"RECHAZADA")}>RECHAZAR</button>;        
        let btnNoAsistio = <button type="button" className="btn btn-warning mibtn" onClick={(event) => this.CambiarEstadoReserva(id,estado,"NO_ASIST")}>NO ASISTIO</button>;
        let btnAsistio = <button type="button" className="btn btn-success mibtn" onClick={(event) => this.CambiarEstadoReserva(id,estado,"ASISTIO")}>ASISTIO</button>;

        this.ifConfirmar=false;
        this.ifRechazar=false;
        this.ifPendienteCupos=false;
        this.ifNoAsist=false;
        this.ifAsist=false;

        if(estado === "PENDIENTE")
        {
            this.ifConfirmar=true;
            this.ifRechazar=true;
            this.ifPendienteCupos=true;
        }

        if(estado === "PENDIENTE_CUPOS")
        {
            this.ifConfirmar=true;
            this.ifRechazar=true;            
        }

        if(estado === "CONFIRMADA")
        {           
            this.ifNoAsist=true;
            this.ifAsist=true;
        }

        return (
            <tr>     
                <td className="align-middle">{negocio}</td>                               
                <td className="align-middle">{cliente}<br/>{telefono}</td>
                <td className="align-middle">{fecha_hora}</td>
                <td className="align-middle">{cant_personas}</td>
                <td className="align-middle coment">{comentario}</td>
                <td className="align-middle">{estado}</td>
                <td className="align-middle"> 

                   {(this.ifConfirmar)?btnConfirmar:null}
                   {(this.ifRechazar)?btnRechazar:null}
                   {(this.ifPendienteCupos)?btnPendienteCupos:null}
                   {(this.ifNoAsist)?btnNoAsistio:null}
                   {(this.ifAsist)?btnAsistio:null}

                </td>
                <Loading show={this.state.preloader}/>
            </tr>
        );
    }
}
export default LaReservaDelCliente;