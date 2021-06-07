import React, { Component, Fragment } from "react";
import { login } from "../../Services/Services";
import Inicio from "../Inicio/Inicio"
//import "./Login.css";


const styles = {backgroundColor: "#991109", 
                width: "22em", 
                margin: "0 auto", 
                marginTop: 10};

const img={width:175,height: 100,marginTop: 10 }

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
          userValue: null,
          passValue: null,
          seCambio:false
        };
        console.log(props);
    }
    handleUserChange = (e) => {
      console.log(this.state.userValue)
      this.setState({
        userValue: e.target.value,
      });
    };
  
    handlePassChange = (e) => {
      console.log(this.state.passValue)
      this.setState({
        passValue: e.target.value,
      });
    };
    handleSend = (e) => {
      e.preventDefault();
      const { userValue } = this.state;
      const { passValue } = this.state;
      if (
        userValue === null ||
        userValue === "" ||
        passValue === null ||
        passValue === ""
      ) {
        alert("Debes completar los datos");
      } else {login({ usuario: userValue, password: passValue });
         //Esto es data estática, debería venir desde el servicio
        login({ usuario: userValue, password: passValue })
          .then((usr) => {
            console.log(usr)
            alert("Te logeaste bien pibe");
            //this.props.handleLogin(usr);
            
          this.setState({seCambio:true})
          
          //this.props.history.replace("/Inicio");
        //}
         })
        .catch((e) => alert(e));
        //if(login({ usuario: userValue, password: passValue }))
       // {
          //this.setState({seCambio:true})
          //this.props.seCambio=true;
          //this.props.history.replace("/Inicio");
        //}
        //else(alert("noup"));
      }
    };
    render() {
        const { userValue } = this.state;
        const { passValue } = this.state;
        const {seCambio}= this.state;
        if(seCambio){
          return <Inicio/>
        }
        return (
          <Fragment>
            <div className="card Login " style={styles}>
              <section className="card-body " style={styles}>
              <img src='/images/logofinalcolor.png' style={img} className="card-img-top imgLogin "  alt="logo" />
                <h1>Login</h1>
                <form>
                  <label htmlFor="inputUsuario">Usuario</label>
                  <br />
                  <input
                    name="usuario"
                    id="inputUsuario"
                    value={userValue}
                    onChange={this.handleUserChange}
                    className="form-control"
                  />
                  <br />
                  <label htmlFor="inputPassword">Contraseña</label>
                  <br />
                  <input
                    name="password"
                    id="inputPaswword"
                    value={passValue}
                    onChange={this.handlePassChange}
                    className="form-control"
                  />
                  <br />
                  <button className="btn btn-primary" onClick={this.handleSend}>
                    Ingresar
                  </button>
                </form>
              </section>
            </div>
          </Fragment>
        );
      }    
}
export default Login ;