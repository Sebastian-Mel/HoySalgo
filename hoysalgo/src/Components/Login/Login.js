import React, { Component, Fragment} from "react";
import {connect} from "react-redux";
import {LoginS , RegistroS } from "../../Services/Services";
import {Link} from "react-router-dom";
import Loading from '../PreLoader/Loading'
import './Login.css';
import Logo from "../../apaisado.png";
import ModalCambioContrasenia from "./ModalCambioContrasenia"
import BotonYcheck from "./BotonYcheck";

class Login extends  Component
{  
    constructor()
    {
        super();        

        this.email = React.createRef();
        this.password = React.createRef();
        this.nombreR = React.createRef();
        this.emailR = React.createRef(); 
        this.password1R = React.createRef();
        this.password2R = React.createRef();

        this.state = 
        {
          mensaje:'',
          preloader:false,
          modalCambioContrasenia:false,
        };
    }
    
    validarDatos = (email, password)=>
    {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        let mail = pattern.test(email);
        var myregex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;       
        let pass = myregex.test(password)
       
        return mail && pass;
     }

    IrA= c =>
    {
        this.props.dispatch({type:c}); 
    }
    
    Entrar = a =>
    {
        this.setState({preloader:true});
        let email    = this.email.current.value; 
        let pass   = this.password.current.value;

        if(email !== '' && pass !== '')
        {
            LoginS({ email: email, password: pass}).then((respuesta) =>
            {              
                if(respuesta.codigo === '200')
                {
                    
                    localStorage.setItem("access_token", respuesta.message.access_token);
                    localStorage.setItem("rol",respuesta.message.rol);
                   
                    if(this.props.history!= null){
                        this.props.history.replace("/")
                        this.props.dispatch({type:"Inicio",preloader:false});
                    }
                    else{this.props.dispatch({type:"Inicio",preloader:false});}
                    
                    
                }
                if(respuesta.codigo === '403')
                {
                    this.setState({mensaje:respuesta.message,preloader:false});
                }
            })          
        }
        else
        {
            this.setState({mensaje:'Datos vacios, verifique!!',preloader:false});
        }
    }
    handleCheck = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            checkTYC:e.target.value
        })
    }
    Registro = a =>
    {
        
        this.setState({preloader:true});
        let nombre  = this.nombreR.current.value; 
        let email   = this.emailR.current.value; 
        let pass1   = this.password1R.current.value;
        let pass2   = this.password2R.current.value;

        if(pass1 === pass2)
        {
            if(this.validarDatos(email,pass1))
            {
                if(nombre !== '' && email !== '' && pass1 !== '' && pass2 !== '')
                {
                    RegistroS({nombre:nombre, email: email, password: pass1}).then((respuesta) =>
                    {              
                        if(respuesta.codigo === '200')
                        {
                            this.setState({mensaje:respuesta.message,preloader:false});
                        } 
                        else
                        {
                            this.setState({mensaje:respuesta.message,preloader:false});
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
                this.setState({mensaje:'La contraseña debe contener: 8 caracteres, debe contener letras y numeros, tu email debe ser valido, verifique!!',preloader:false}); 
            }
        }
        else
        {
            this.setState({mensaje:'Las contraseñas no coinciden, verifique!!',preloader:false});
        }
    }
    Modal=(e)=>{
       if(this.state.modalCambioContrasenia){}
       else{this.setState({modalCambioContrasenia:true});}
       
    }
    render()
    {
    return(
        <Fragment>
        <ModalCambioContrasenia  className="miModal" show={this.state.modalCambioContrasenia} onHide={() => this.setState({modalCambioContrasenia:false})}/>
        <div className="login-wrap loginapp">
            <div className="login-html">
                <div>
                    <img src={Logo} alt="Hoy Salgo!!" className="logoLg" />
                </div>
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                <label htmlFor="tab-1" className="tab">Entrar</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab">Registrarme</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="email" className="label">Email</label>
                            <input id="email" type="mail" className="input" ref={this.email}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password" ref={this.password}/>
                        </div>                       
                        <div className="group">
                            <input type="button" className="button" value="ENTRAR" onClick={(event) => this.Entrar(event)}/>                            
                        </div>                   
                        <div className="foot-lnk">
                            {this.state.mensaje}
                        </div>
                    </div>
                    <div className="sign-up-htm">  
                        <div className="group">
                            <label htmlFor="nombre" className="label">Nombre</label>
                            <input id="nombre" type="text" className="input" ref={this.nombreR}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email</label>
                            <input id="pass" type="text" className="input" ref={this.emailR}/>
                        </div>                     
                        <div className="group">
                            <label htmlFor="pass" className="label">Contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password" ref={this.password1R}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Repita la Contraseña</label>
                            <input id="pass" type="password" className="input" data-type="password" ref={this.password2R}/>
                        </div> 
                        <BotonYcheck Registro={this.Registro}/>
                        <div className="foot-lnk">
                            {this.state.mensaje}
                        </div>                        
                    </div>                    
                </div>
                <div>
                    <div className="volver ">
                    <Link to="/" className="btn btn-outline-secondary">Volver</Link>
                </div>
                <div className="recuperarContraseniaLogin ">
                    <button className="btn btn-outline-secondary" onClick={() => this.Modal()}>Olvide mi contraseña</button> 
                </div>
                </div>
                 
            </div>
            <Loading show={this.state.preloader}/>
        </div>
       
        </Fragment>
    )
  }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(Login);