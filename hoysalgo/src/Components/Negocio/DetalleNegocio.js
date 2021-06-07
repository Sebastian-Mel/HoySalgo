import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import ModalReserva from "./ModalReserva";
import ModalMenu from "./ModalMenu"
import {Button} from "react-bootstrap";
import {menuDeNegocio,eventoDeNegocio, todosLosNegocios} from "../../Services/Services";

import "./DetalleNegocio.css";
class DetalleNegocio extends Component {

    componentDidMount()
    {       
        window.scrollTo(0, 0);
        
        if(this.props.negocioSeleccionado!==0){
            localStorage.setItem("idNegocio",this.props.negocioSeleccionado);
        }
        if(this.props.todosLosNegocios.length!==0){
           localStorage.setItem("todosLosNegocios", JSON.stringify(this.props.todosLosNegocios))
        }
        
        let idNegocio = localStorage.getItem("idNegocio");
        
        let negocios= JSON.parse(localStorage.getItem("todosLosNegocios"));
        let elNegocio= negocios.find
                (elNegocio=>elNegocio.id==idNegocio);

        this.setState({
            nombre:elNegocio.nombre,
            descripcion:elNegocio.descripcion,
            telefono:elNegocio.telefono,
            foto:elNegocio.foto,
            ciudad:elNegocio.ciudad,
            direccion:elNegocio.direccion,
            categoria:elNegocio.categoria_id,
            img:'https://recursos.hoysalgo.uy/'+elNegocio.foto,
            horaDesde:elNegocio.horaDesde, 
            horaHasta:elNegocio.horaHasta,
            reservas_count:elNegocio.reservas_count,
            disponible:elNegocio.disponible
        });

        menuDeNegocio(this.props.negocioSeleccionado).then((respuesta) =>
        { 
            this.setState({urlDocumento:respuesta.message[0].documento});
        });

        eventoDeNegocio(this.props.negocioSeleccionado).then((respuesta) =>
        { 
            this.setState({fechaEvento:respuesta.message[0].fecha_hora,costoEvento:respuesta.message[0].costo});
        });
        
    }
    constructor()
    { 
        super();
        this.state = {          
            preloader:false,
            modalShow:false,
            modalReserva:false,
            modalMenu:false,
            nombre:'',
            descripcion:'',
            telefono:'',
            foto:'',
            ciudad:'',
            direccion:'',
            categoria:'',
            img:'',
            horaDesde:'',
            horaHasta:'',
            reservas_count:0,
            disponible:0,
            urlDocumento:"",
            fechaEvento:'',
            costoEvento:''
        };
    } 

    
    render()
    {   
        const textoReserva= (this.state.reservas_count > 10) ? "Ya hay " + this.state.reservas_count + " reservas confirmadas": "¡Se de los primeros en reservar!";
        const link = "https://api.whatsapp.com/send?phone=+598"+this.state.telefono.substr(1,8)+"&text=Hola!%20Quiero%20reservar%20un%20lugar%20en%20"+this.state.nombre+"!"
        const linkWPP = <a href={link} target="_blank">{this.state.telefono}</a>
        const telefono = (this.state.telefono.substr(0,2) !== "09")?this.state.telefono: linkWPP;

        const sinConMenu = (this.state.urlDocumento !== '')?true:false;
        const evento= this.state.fechaEvento !== undefined ? <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                    <li>
                    <span className="property-specs">Costo Entrada</span>
                    <span className="property-specs-number">{this.state.costoEvento}</span>                    
                    </li>
                    <li>
                    <span className="property-specs">Proximo Evento</span>
                    <span className="property-specs-number">{this.state.fechaEvento}</span>                    
                    </li>                  
                    </ul> :null;
        return (
            <Fragment>                                   
            <NavBar/>
            
            <div className="site-section">
                <div className="container">
                    <div className="row">                    
                        <div className="col-lg-12">
                            <form className="p-12">
                                <div className="bg-white property-body border-bottom border-left border-right ">
                                    <div className="row m-0 justify-content-center align-items-center vh-100">
                                        <div className="col-sm-6 bg-white centrarText">
                                            <h2>{this.state.nombre}</h2>
                                        </div>
                                    </div>
                                    <div className="row m-0 justify-content-center align-items-center vh-100">
                                        <img src={this.state.img} className="img-fluid"/>
                                    </div>
                                </div> 
                                <div className="bg-white property-body border-bottom border-left border-right">
                                    <div className="row mb-12">
                                        <div className="col-md-12 centrarText">
                                            <strong className="text-success h1 mb-3">{textoReserva}</strong>
                                        </div>
                                        <div className="col-md-12 centrarText">
                                          {evento}  
                                        </div>
                                    </div>
                    
                                    <div className="row mb-5">
                                        <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                            <span className="d-inline-block text-black mb-0 caption-text">CIUDAD</span>
                                            <strong className="d-block">{this.state.ciudad}</strong>
                                        </div>
                                        <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                            <span className="d-inline-block text-black mb-0 caption-text">DIRECCIÓN</span>
                                            <strong className="d-block">{this.state.direccion}</strong>
                                        </div>
                                        <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                            <span className="d-inline-block text-black mb-0 caption-text">Tel. Contacto</span>
                                            <strong className="d-block">{telefono}</strong>
                                        </div>
                                    </div>
                    
                                    <h2 className="h2 text-black">Descripcion</h2>                    
                                    <p className="descripcion">{this.state.descripcion}</p>
                                   
                                    <div className="row mb-12">
                                        <div className="col-md-6 text-center border-bottom border-top py-3">
                                            <Button variant="primary" onClick={() => this.setState({modalReserva:true})}>
                                                RESERVAR AHORA
                                            </Button>
                                        </div>                                           
                                        <div className="col-md-6 text-center border-bottom border-top py-3">
                                            <Button variant="primary" onClick={() => this.setState({modalMenu:true})} className={(!sinConMenu)?"invisible":"visible"} >
                                                MIRAR EL MENÚ
                                            </Button>
                                        </div>
                                    </div>  
                                    <ModalReserva show={this.state.modalReserva} onHide={() => this.setState({modalReserva:false})} desde={this.state.horaDesde} hasta={this.state.horaHasta} disponible={this.state.disponible}/>

                                    <ModalMenu show={this.state.modalMenu} onHide={() => this.setState({modalMenu:false})} documento={this.state.urlDocumento}/>
                                </div>            
                            </form>                          
                        </div>  
                        
                    </div>
                </div>                
            </div>
            <Footer/>
            </Fragment>                  
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,
        todosLosNegocios : state.todosLosNegocios,
        negocioSeleccionado : state.negocioSeleccionado   
    };
}
export default connect(mapStateToProps)(DetalleNegocio);