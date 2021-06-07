import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import { AgregarQuitarFavoritoS, eventoDeNegocio} from "../../Services/Services";
import {Link,withRouter} from "react-router-dom";

import './Negocio.css';
class Negocio extends  Component
{
    componentDidMount()
    {       
        
        eventoDeNegocio(this.props.id).then((respuesta) =>
        { 
            this.setState({fechaEvento:respuesta.message[0].fecha_hora,costoEvento:respuesta.message[0].costo});
        }); 
    }

    constructor()
    {
        super();
        this.state = 
        {            
            preload:false,
            mensaje:'',
            fechaEvento:'',
            costoEvento:''
        };        
    }

    EntrarNegocio(id)
    {       
      this.props.dispatch({type:"DetalleNegocio",payload:id}); 
    }

    AgregarQuitarFavorito = negocio_id =>
    {
        let token = localStorage.getItem('access_token'); 
        if(token !== null && token !== "")
        { 
            let data = {negocio_id:negocio_id,token:token};
            AgregarQuitarFavoritoS(data).then((respuesta) =>
            {      
                this.props.refresh();
            });
        }
        else
        {
            //alert("Debes iniciar sesion para agregar a favoritos");
            //this.props.dispatch({type:"Login"});
            this.props.history.push("/Login");
        }
    }
    

    render()
    {
        let {id,nombre,descripcion,foto,ciudad,direccion,reservas_count,esFavorito,disponible}=this.props;

        return(
            <Fragment> 
                <div className="row mb-4 cardStyle">
                    <div className="col-md-12">
                        <div className="property-entry horizontal d-lg-flex">  
                            <div className="offer-type-wrap">
                                <span className={(disponible=="1")?"offer-type bg-success":"offer-type bg-danger"}>{(disponible=="1")?"¡Hay Lugar!":"¡Ya no hay Cupos!"}</span>
                            </div>
                            <Link to="/DetalleNegocio" href className="property-thumbnail h-100" onClick={() => this.EntrarNegocio(id)}>
                                <img src={'http://recursos.hoysalgo.uy/'+foto} alt={nombre} className="img-fluid"/>
                            </Link> 
                            <div className="p-4 property-body ">
                                <a href className={(esFavorito)?"property-favorite favorite": "property-favorite"} onClick={() => this.AgregarQuitarFavorito(id)}>
                                    <span className="icon-heart-o" ></span>
                                </a>
                            <h2 className="property-title">
                                <a href onClick={() => this.EntrarNegocio(id)}>{nombre}</a>
                            </h2>
                            <span className="property-location d-block mb-3">
                                <span className="property-icon icon-room"></span>
                                {ciudad}--{direccion}
                            </span>                  
                            <p>{descripcion}</p>
                            <ul className="property-specs-wrap mb-3 mb-lg-0">
                                <li>
                                    <span className="property-specs">Cantidad de Reservas</span>
                                    <span className="property-specs-number">{reservas_count}<sup></sup></span>
                                </li>
                            </ul>
                            </div>        
                        </div>
                    </div>
                </div>    
            </Fragment>
        )
    }
}
function mapStateToProps(state)
{
    return {
        mostrar : state.mostrar,
        todosMisFavoritos:state.todosMisFavoritos   
    };
}
const LocacionWithRouter = withRouter(Negocio);

export default connect(mapStateToProps)(LocacionWithRouter);

//export default connect(mapStateToProps)(Negocio);