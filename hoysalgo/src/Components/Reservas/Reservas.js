import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';

import { misReservas,reservasEnMisNegocios} from "../../Services/Services";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import MiReserva from "./MiReserva";
import LaReservaDelCliente from "./LaReservaDelCliente";
import Loading from '../PreLoader/Loading'

import "./Reservas.css";
class Reservas extends Component
{
    constructor()
    {  
        super();
        this.state = {          
            preloader:false,
            token:localStorage.getItem('access_token')            
        };
    } 
    componentDidMount()
    {
       this.cargarReservas();
    }
    cargarReservas = aa =>
    {
        this.setState({preloader:true});
        let token = localStorage.getItem('access_token'); 
        if(token !== null && token !== "")
        { 
            misReservas(token).then((respuesta) =>
            {                     
                this.props.dispatch({type:"CargarMisReservas", payload:respuesta.message});
            });
            this.reservasDeMisNegocios(token);
            
        }
    }
    
    reservasDeMisNegocios=(token)=>{
        
        reservasEnMisNegocios(token).then((respuesta) =>
        {  
            this.props.dispatch({type:"CargarReservasEnMisNegocios", payload:respuesta.message});  
            this.setState({preloader:false});              
        });
        
        setTimeout(function(){ this.reservasDeMisNegocios(localStorage.getItem('access_token'))}.bind(this), 300000);            
    }

    render() {
       
        return (
            
            <Fragment>                             
                <NavBar/>
                <div className="site-section reservas">
                    <div className="container">
                        <h2 className="titulo">Mis Reservas</h2> 
                        <div className="row">
                            <table className="table table-hover table-dark table-responsive mitable">
                            <thead>
                                    <tr>                
                                        <th scope="col" className="align-middle negocio">NEGOCIO</th> 
                                        <th scope="col" className="align-middle">FECHA/HORA </th>
                                        <th scope="col" className="align-middle">CANT. Personas</th>
                                        <th scope="col" className="align-middle">COMENTARIO</th>
                                        <th scope="col" className="align-middle">ESTADO</th>
                                        <th scope="col" className="align-middle">##</th>                                       
                                    </tr>
                                </thead>
                                <tbody>                                   
                                    {
                                        this.props.todasMisReservas.map(
                                            (laReserva,id) => 
                                            <MiReserva key = {id} {...laReserva} cargarReservas = {this.cargarReservas}/>
                                        )
                                    }                                                                       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div className="site-section reservas">
                    <div className="container">
                        <h2 className="titulo">De mis Negocios</h2> 
                        <div className="row">
                            <table className="table table-hover table-dark table-responsive mitable">
                                <thead>
                                    <tr>                
                                        <th scope="col" className="align-middle">NEGOCIO</th>                   
                                        <th scope="col" className="align-middle">CLIENTE</th>
                                        <th scope="col" className="align-middle">FECHA/HORA </th>
                                        <th scope="col" className="align-middle">CANT. Personas</th>
                                        <th scope="col" className="align-middle">COMENTARIO</th>
                                        <th scope="col" className="align-middle">ESTADO</th>
                                        <th scope="col" className="align-middle">##</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.reservasDelNegocio.map(
                                            (laReserva,id) => 
                                            <LaReservaDelCliente key = {id} {...laReserva} cargarReservas = {this.cargarReservas}/>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Loading show={this.state.preloader}/>
                <Footer/>
            </Fragment> 
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,
        todasMisReservas:state.todasMisReservas,
        reservasDelNegocio: state.reservasDelNegocio    
    };
}
export default connect(mapStateToProps)(Reservas);