import React, { Component,Fragment} from "react";
import {connect} from "react-redux";
import './Inicio.css';

import NavBar from "../Navbar/NavBar";
import Carrusel from "../Carrusel/Carrusel";
import Categorias from "../Categorias/Categorias";
import Footer from "../Footer/Footer";
import ModalMenu from "../Negocio/ModalMenu";
import {menuDeNegocio} from "../../Services/Services";



class Inicio extends Component
{
    constructor()
    {
        super();

        this.state = 
        {
          modalMenu:false,
          callback:false,
          urlDocumento:"null"
        };
    }
    componentDidMount(){
        const hayId = this.props.match && this.props.match.params && this.props.match.params.id;
        if(hayId){
            console.log(this.props.match.params.id);
            this.props.dispatch({type:"DetalleNegocio",payload:this.props.match.params.id});
            menuDeNegocio(this.props.match.params.id).then((respuesta) =>
            { 
                console.log("what?");
                this.setState({urlDocumento:respuesta.message[0].documento,
                    modalMenu:true});
            });
        }
    }
        
    //componentWillReceiveProps(){
        
        //this.setState({});
    //}
    salirModal=()=>{
        this.props.history.replace("/")
    }
    render() {

        return (
            <Fragment>                                   
                <NavBar />
                <Carrusel />
                <Categorias/>
                <Footer/>
                <ModalMenu show={this.state.modalMenu} onHide={this.salirModal} documento={this.state.urlDocumento}/>
            </Fragment>
        );        
      }    
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar, // inicio , login 
        ver : state.ver, //nuevo negocio, detalle de mi negocio, mis favoritos, mis reservas, todos los negocios, etc 
        negocioSeleccionado : state.negocioSeleccionado       
    };
}
export default connect(mapStateToProps)(Inicio);