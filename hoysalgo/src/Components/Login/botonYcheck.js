import React, { Component, Fragment } from 'react'
import "./Login.css";
import ModalTYC from "./ModalTYC"

class BotonYcheck extends Component {

    constructor()
    {
        super();        
        this.state = 
        {
          buttonDisabled:"true",
          modalTYC:false,
        };
    }
    handleCheck=(e)=>{
        if(this.state.buttonDisabled=="true")
        {
            this.setState({buttonDisabled:"false"})
        }
        else{ this.setState({buttonDisabled:"true"})}
        
    }
    Modal=(e)=>{
        e.preventDefault();
        this.setState({modalTYC:true})
        
     }
    render() {
        let disabled=this.state.buttonDisabled==="true" ? true:false;       
        return (
            <Fragment>
            <ModalTYC  className="miModal" show={this.state.modalTYC} onHide={() => this.setState({modalTYC:false})}/>
            <div>
                <input type="checkbox" id="terminosCondiciones" onClick={this.handleCheck} className="TYC" name="terminosCondiciones" value="false"/>
                <label htmlFor="terminosCondiciones" className="TYCL">Acepto los <a className="TYCA" href="#" onClick={this.Modal}>Terminos y Condiciones</a></label>  
                </div>  
                                
                <div className="group">
                    <input type="button" className="customButton" value="Registrarme" disabled={disabled} onClick={(event) => this.props.Registro(event)}/>
            </div>
            </Fragment>
            
        )
    }
}
export default(BotonYcheck);
