import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';

import { EnviarMailS } from "../../Services/Services";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Loading from '../PreLoader/Loading'
//

import './Contacto.css';

class Contacto extends Component
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
            preloader:false
        };
    } 

    Enviar = a =>
    {                
        let nombre = this.nombre.current.value;
        let email = this.email.current.value;
        let asunto = this.asunto.current.value;
        let mensaje = this.mensaje.current.value;
        
        if(
            nombre !== '' 
            && email !== ''
            && asunto !== ''
            && mensaje !== ''           
        )
        {
            this.setState({preloader:true});

            EnviarMailS({
                nombre : nombre, email : email, asunto : asunto, mensaje : mensaje
            }).then((respuesta) =>
            {   
                if(respuesta.codigo === "200")
                {                        
                    this.setState({mensaje:respuesta.message, buttonDisabled:true, preloader:false});  
                }
                else
                {
                    this.setState({mensaje:"Ocurrió un error al enviar tu consulta!",preloader:false});
                }            
            });        
        }
        else
        {
            this.setState({mensaje:'Algunos datos estan vacíos, verifique!!',preloader:false});            
        } 
    }

    render()
    {
        return(
            <Fragment>                                                   
                <NavBar/>
                    <div className="site-section">
                        <div className="container contenedor">
                            <div className="row">                    
                                <div className="col-md-12 col-lg-8 mb-5 contactanos">
                                    <div className="col-md-12 text-center">
                                        <h2 className="tituloContactanos"> Contactanos </h2>                                   
                                    </div>        

                                    <form className="p-5">
                                        <div className="row form-group">
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <label className="font-weight-bold " htmlFor="nombre">Nombre</label>
                                                <input type="text" id="nombre" className="form-control custom-imput" placeholder="¿Cómo es tu nombre?" ref={this.nombre}/>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold" htmlFor="email">Email</label>
                                                <input type="email" id="email" className="form-control" placeholder="¿A donde podemos responder tu consulta?" ref={this.email}/>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold" htmlFor="asunto">Asunto</label>
                                                <input type="text" id="asunto" className="form-control" placeholder="¿Por qué razon querés contactarnos?" ref={this.asunto}/>
                                            </div>
                                        </div>                                    

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold" htmlFor="mensaje">Mensaje</label> 
                                                <textarea name="mensaje" id="mensaje" cols="30" rows="5" className="form-control" placeholder="Dinos en que podemos ayudarte..." ref={this.mensaje}></textarea>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="button" value="CONSULTAR" className="btnEnviar" disabled={this.state.buttonDisabled} onClick={(event) => this.Enviar(event)} />
                                            </div>
                                        </div>
                                        <div className="elContacto">
                                            {this.state.mensaje}
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4">
                                    <div className="p-4 mb-3 contactanos">
                                    <h3 className="h2 mb-3">Datos de contacto</h3>
                                    <p className="mb-0 font-weight-bold">Nuestro WP</p>
                                    <p className="mb-4"><a href="https://api.whatsapp.com/send?phone=+59896220609&text=Hola!%20Quiero%20llegar%20a%20mas%20clientes!">+598 96220609</a></p>
                                    <p className="mb-0 font-weight-bold">Nuestro email</p>
                                    <p className="mb-0"><a href="mailto:info@hoysalgo.uy">info@hoysalgo.uy</a> </p>
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
export default connect(mapStateToProps)(Contacto);