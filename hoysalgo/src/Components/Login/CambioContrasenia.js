import React, { Component} from "react";
import {connect} from "react-redux";
import { cambiarContrasenia } from "../../Services/Services";
import Loading from '../PreLoader/Loading'
import './Login.css';
import Logo from "../../apaisado.png";

class CambiarContrasenia extends  Component
{  
    constructor()
    {
        super();        
        this.state = 
        {
          mensaje:'',
          preloader:false,
          pass1:'',
          pass2:'',
          email:'',
          volver:false
        };
    }
    
    validarPass = pass =>
    {
        var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;       
        if(myregex.test(pass))
        {
           return true;        
        }
        return false;
    }
    IrA= c =>
    {
        this.props.dispatch({type:c}); 
    }
    handlePass1Change = e => {
        
      this.setState({
        pass1: e.target.value,
      });
    };
    handlePass2Change = e => {
        
      this.setState({
        pass2: e.target.value,
      });
    };
    handleEmailChange = e => {
        
      this.setState({
        email: e.target.value,
      });
    };
    handleCambioContrasenia = e =>
    {
        e.preventDefault();
        let {pass1}  = this.state;
        let {pass2}  = this.state;
        let {email}  = this.state
        let token  = this.props.match.params.token;

        if(pass1 === pass2)
        {
            if(this.validarPass(pass1))
            {
                if(  pass1 !== '' && pass2 !== '')
                {
                    this.setState({preloader:true}); 
                    cambiarContrasenia({ token:token,email:email,password: pass1}).then((respuesta) =>
                    {              
                        if(respuesta.codigo === 200)
                        {
                            this.setState({mensaje:respuesta.message,preloader:false});
                            this.setState({volver:true});
                        } 
                        else
                        {
                            this.setState({mensaje:"Ocurrio un error, revisa los datos ingresados!!",preloader:false});
                        }                    
                    })
                }
                else
                {
                    this.setState({mensaje:'Datos vacios, verifique!!',preloader:false});
                }
            }
            else
            {
                this.setState({mensaje:'La contraseña debe contener: 8 caracteres Minus-Mayus y numeros, verifique!!',preloader:false}); 
            }
        }
        else
        {
            this.setState({mensaje:'Las contraseñas no coinciden, verifique!!',preloader:false});
        }
    }

    render()
    {
        let volver=this.state.volver?<div class="alert alert-primary" role="alert">
        La contraseña ha sido cambiada, haz click <a href="/Login" class="alert-link">aqui</a> para volver al inicio.
        </div>:"";
        let disabled=this.state.volver ? true:false;
        
    return(
        
        <div className="login-wrap loginapp">
            
        <div className="login-html">
            
            <div>
                <img src={Logo} alt="Hoy Salgo!!" className="logoLg" />
            </div>
            <label htmlFor="tab-1" className="tab">Cambio de Contraseña</label>
            <div className="login-form">                
                <div className="cambiarContrasenia">
                    <div className="group">
                        <label htmlFor="email" className="label">Email</label>
                        <input id="email" onChange={this.handleEmailChange} disabled={disabled} type="email" className="input" ref={this.email}/>
                    </div> 
                    <div className="group">
                        <label htmlFor="email" className="label">Contraseña</label>
                        <input id="email" onChange={this.handlePass1Change} disabled={disabled} type="password"  className="input" ref={this.email}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Confirmar contraseña</label>
                        <input id="pass" onChange={this.handlePass2Change} disabled={disabled} type="password" className="input" data-type="password" ref={this.password}/>
                    </div> 
                    
                    <div className="group">
                        <input type="button" className="button" value="Cambiar Contraseña" onClick={this.handleCambioContrasenia}/>                            
                    </div> 
                    <div className="foot-lnk">
                        
                    </div>
                </div>                                 
            </div>  
            <div className="recuperarContraseniaLogin">
                {volver}
            </div>  
        </div>
        
        <Loading show={this.state.preloader}/>
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
export default connect(mapStateToProps)(CambiarContrasenia);