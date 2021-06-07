import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';

import { enviarDatos } from "../../Services/Services";
import { misDatos } from "../../Services/Services";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Loading from '../PreLoader/Loading'
//

import './MisDatos.css';

class MisDatos extends Component
{
    constructor()
    {
        super();
        this.nombre= React.createRef();
        this.email= React.createRef();
        this.asunto= React.createRef();
        this.mensaje= React.createRef();
      

        this.state = {
          mensaje:'',        
          buttonDisabled:false, 
          preloader:false,
          nombre:"",
          ciudad:"",
          telefono:"",
          direccion:""
        };
    } 
    componentDidMount=()=>{

        let token = localStorage.getItem("access_token");
        misDatos(token).then((respuesta)=>
        {
            this.setState({nombre:respuesta.message.nombre,
                           ciudad:respuesta.message.ciudad,
                            direccion:respuesta.message.direccion,
                            telefono:respuesta.message.telefono});   
        })
    }
    handleCambiarNombre=(e)=>{
        e.preventDefault();
        this.setState({nombre:e.target.value})

    }
    handleCambiarTelefono=(e)=>{
        e.preventDefault();
        this.setState({telefono:e.target.value})

    }
    handleCambiarDireccion=(e)=>{
        e.preventDefault();
        this.setState({direccion:e.target.value})

    }
    handleCambiarCiudad=(e)=>{
        e.preventDefault();
        this.setState({ciudad:e.target.value})

    }
    Enviar = a =>
    {                
        let {nombre} = this.state
        let {telefono} = this.state;
        let {ciudad} = this.state;
        let {direccion} = this.state;
        let token= localStorage.getItem("access_token");

        if(nombre !== '')
        {
            this.setState({preloader:true});

            enviarDatos({
                nombre : nombre, telefono : telefono, ciudad : ciudad, direccion : direccion,token:token
            }).then((respuesta) =>
            {
                if(respuesta.cod_error == 200)
                {                        
                    this.setState({
                        mensaje:respuesta.message,
                        buttonDisabled:false, 
                        preloader:false});  
                }
                else
                {
                    this.setState({mensaje:"Ocurrió un error al enviar tus datos",preloader:false});
                }            
            });        
        }
        else
        {
            this.setState({mensaje:'No puedes dejar el nombre vacío',preloader:false});            
        } 
    }

    render()
    {
        let {nombre}= this.state;
        let {ciudad}=this.state;
        let {direccion}=this.state;
        let {telefono}=this.state;
        return(
            <Fragment>                                                   
                <NavBar/>
                    <div className="site-section">
                        <div className="container contenedor">
                            <div className="row">                    
                                <div className="col-md-12 col-lg-8 mb-5 contactanos">   
                                    <div className="col-md-12 text-center">
                                        <h2 className="tituloMisDatos"> Mis Datos </h2>                                   
                                    </div>                                                 
                                    <form className="p-5">
                                        
                                        <div className="row form-group">
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <label className="font-weight-bold " htmlFor="nombre">Nombre</label>
                                                <input type="text" id="nombre"  value={nombre} onChange={this.handleCambiarNombre} className="form-control custom-imput" placeholder={nombre} />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold" htmlFor="tel">Teléfono</label>
                                                <input type="tel" id="tel" onChange={this.handleCambiarTelefono}  className="form-control" placeholder={telefono} ref={this.email}/>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                        <div className="col-md-12">
                                        <label className="font-weight-bold" htmlFor="ciudad">Ciudad</label>
                                        <select name="ciudad" id="ciudad" ref={this.ciudad} onChange={this.handleCambiarCiudad}  className="form-control">
                                            {<option defaultValue value={ciudad}>{ciudad}</option>} 
                                            <option value="Montevideo">Montevideo</option>
                                            <option value="Canelones">Canelones</option>
                                            <option value="Cerro Largo">Cerro Largo</option>
                                            <option value="Colonia">Colonia</option>
                                            <option value="Durazno">Durazno</option>
                                            <option value="Flores">Flores</option>
                                            <option value="Florida">Florida</option>
                                            <option value="Lavalleja">Lavalleja</option>
                                            <option value="Maldonado">Maldonado</option>
                                            <option value="Artigas">Artigas</option>
                                            <option value="Paysandú">Paysandú</option>
                                            <option value="Río Negro">Río Negro</option>
                                            <option value="Rivera">Rivera</option>
                                            <option value="Rocha">Rocha</option>
                                            <option value="Salto">Salto</option>
                                            <option value="San José">San José</option>
                                            <option value="Soriano">Soriano</option>
                                            <option value="Tacuarembó">Tacuarembó</option>
                                            <option value="Treinta y Tres">Treinta y Tres</option>
                                        </select>
                                        </div>
                                        </div>      
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold" htmlFor="email">Dirección</label>
                                                <input type="text" id="email" onChange={this.handleCambiarDireccion} value={direccion}  className="form-control" placeholder="Dirección" ref={this.email}/>
                                            </div>
                                        </div>                           
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="button" value="Actualizar mis datos" className="btnEnviar" disabled={this.state.buttonDisabled} onClick={(event) => this.Enviar(event)} />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="elContacto">
                                        {this.state.mensaje}
                                    </div> 
                                </div>                                
                            </div>
                        </div>
                    </div>                    
                <Footer/>
                <Loading show={this.state.preloader}/>
            </Fragment> 
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(MisDatos);