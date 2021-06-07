import React, { Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

import "./estiloCard.css";
class Card extends Component{

    constructor()
    {
        super();
        this.idNegocio = React.createRef();        

        this.state = {
            preload:false,
            alerta:{
                mensaje:'',
                tipo:''// OK/ERROR
            }
        }
    }
    EntrarNegocio(id)
    {       
      this.props.dispatch({type:"DetalleNegocio",payload:id}); 
    }
    
    render()
    {
      let {id,nombre,foto,reservas_count} = this.props;
      
      const background=
      {
        backgroundImage: 'url("http://recursos.hoysalgo.uy/'+foto+'")'
      };

      const textoReserva= reservas_count > 10? "Ya hay " + reservas_count + " confirmadas":"";

      return(        
        <div className="cardCarrusel custom" style={background}>
          <div className="blackOpacity">
            <p className="mb-5">
              <strong className="h1 text-light font-weight-bold">
                {nombre} 
              </strong><br/>
              <strong className="h3 text-light">
                {textoReserva}
              </strong>
            </p>
            <Link to="/DetalleNegocio" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2" 
              onClick={() => this.EntrarNegocio(id)}>
              ¡Yo también quiero reservar!
            </Link>

          </div>              
        </div>        
      )
    }  
}
function mapStateToProps(state)
{
    return {
      mostrar:state.mostrar,   
      negocioSeleccionado:state.negocioSeleccionado    
    };
}
export default connect(mapStateToProps)(Card);