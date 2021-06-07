import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal,Container } from "react-bootstrap";
import "./Login.css"
import Logo from "../../apaisado.png";
import {mailCambioContrasenia} from "../../Services/Services"
import Loading from '../PreLoader/Loading'

class ModalMenu extends Component
{
  constructor()
  {  
      super();       
      this.state = {  
          mensaje:'',        
          preloader:false,
          email:"",
          buttonDisabled:false
      }

  }
  handleEnviarMailContrasenia=(e)=>{
    
    let {email} = this.state;
    this.setState({preloader:true,buttonDisabled:true}); 
    
    mailCambioContrasenia(email).then((respuesta) =>
    {              
        if(respuesta.codigo === '200')
        {
            this.setState({mensaje:respuesta.message,preloader:false,buttonDisabled:true})
        }
        else
        {
            this.setState({mensaje:respuesta.message,preloader:false})
        }
    })
}

handleEmailChange = e =>
{
    e.preventDefault(); 
    this.setState({
        email: e.target.value,
    });
};

  render() {
        return (            
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">                
                <Modal.Body className="show-grid ">
                  <Container > 
                    <div className="login-wrap-cc loginapp">
                        <div className="login-html">
                            <div>
                                <img src={Logo} alt="Hoy Salgo!!" className="logoLg" />
                            </div> 
                            <div className="foot-lnk">
                                Recuperar contraseña
                            </div>
                            <div className="login-form-cc">
                                <div className="sign-in-htm-cc">
                                    <div className="group">
                                        <label htmlFor="email" className="label">Email</label>
                                        <input id="email" type="mail" className="input" onChange={this.handleEmailChange} />
                                    </div>  
                                    <div className="group">
                                        <input type="button" className="button" disabled={this.state.buttonDisabled} value="Enviar mail" onClick={this.handleEnviarMailContrasenia}/>                            
                                    </div>           
                                    <div className="foot-lnk">
                                        {this.state.mensaje}
                                    </div>
                                </div>                   
                            </div> 
                            <div className="volver-cc ">
                                <button type="button" onClick={this.props.onHide} className="btn btn-outline-secondary">Volver</button>
                            </div>
                        </div>                   
                    </div>
                    <Loading show={this.state.preloader}/>                    
                </Container>
                </Modal.Body>
            </Modal>
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
export default connect(mapStateToProps)(ModalMenu);