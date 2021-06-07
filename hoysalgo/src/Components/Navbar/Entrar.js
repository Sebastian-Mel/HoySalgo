import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Entrar extends Component {
    IrA= c =>
    {
        this.props.dispatch({type:c});    
    }
    render() {
        return (
            <>
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link  to="/" onClick={this.IrA('Inicio')} className="nav-link btn btn-link">
                                Inicio 
                            <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contacto" className="nav-link btn btn-link" role="button">
                                Contactanos
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link  to="/Login" className="nav-link btn btn-link" role="button"  >
                                Entrar
                            </Link>
                        </li>
                    </ul> 
            </>
        );
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,       
    };
}
export default connect(mapStateToProps)(Entrar);