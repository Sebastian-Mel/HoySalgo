import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button,Container } from "react-bootstrap";
import Loading from '../PreLoader/Loading'
import {nuevaReserva} from "../../Services/Services";
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class ModalReserva extends Component
{
    constructor()
    {  
        super();
        this.fecha= React.createRef();
        this.hora= React.createRef();
        this.cant_personas= React.createRef();
        this.comentario= React.createRef();
        

        this.state = {  
            mensaje:'',        
            preloader:false,
            buttonDisabled:false
        }
    }

    ReservaNueva = aa =>
    {
        this.setState({preloader:true,mensaje:""});

        let token = localStorage.getItem('access_token');
        
        if(token !== null && token !== "")
        {     
            let data = {
                token: token,
                negocio_id: this.props.negocioSeleccionado,
                fecha_hora: this.fecha.current.value+' '+ this.hora.current.value,
                cant_personas: this.cant_personas.current.value,
                comentario: this.comentario.current.value +'--'
            } 
            if(this.props.disponible ==="1")
            {
                var fecha1 = moment(data.fecha_hora, "YYYY-MM-DD HH:mm");
                var fecha2 = moment(moment(), "YYYY-MM-DD HH:mm");

                var dif_dias = fecha1.diff(fecha2, 'd');
                var dif_horas = fecha1.diff(fecha2, 'h');

                if(this.fecha.current.value !== "" && dif_dias >=0)
                {                                            
                    if(this.cant_personas.current.value >= 1 && this.cant_personas.current.value <= 20)
                    {
                        let desde = this.props.desde;
                        let hasta = this.props.hasta;

                        if(desde == null || hasta == null)
                        {
                            desde = '17:00';
                            hasta = '23:00';
                        }                        
                        
                        if(this.hora.current.value >= desde && this.hora.current.value <= hasta)
                        {
                            if(dif_horas >=0)
                            {                                
                                nuevaReserva(data).then((respuesta) =>
                                {   
                                    this.setState({preloader:false,mensaje:respuesta.message,buttonDisabled:true});
                                })
                            }
                            else
                            {
                                this.setState({preloader:false,mensaje:"El horario indicado ya no es reservable"});
                            }                          
                        }
                        else
                        {
                            this.setState({preloader:false,mensaje:"El horario permitido es entre "+ desde + " y " +hasta});
                        }
                    }
                    else
                    {
                        this.setState({preloader:false,mensaje:"El maximo de lugares a reservar es de 20 personas!"});
                    }
                }
                else
                {
                    this.setState({preloader:false,mensaje:"La fecha indicada ya no es reservable o no es correcta!"});
                }                
            }
            else
            {
                this.setState({preloader:false,buttonDisabled:false,mensaje:"El negocio no es reservable por el momento!"});
            }                       
        }
        else
        {
            this.props.history.replace("/Login");
        }
    }

    render()
    {     
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">                
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                        Nueva Reserva
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                  <Container>      
                        <div className="form-contact-agent">
                            <div className="form-group">
                                <label htmlFor="fecha">FECHA</label>
                                <input type="date" id="fecha" className="form-control" ref={this.fecha}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hora">HORA</label>
                                <input type="time" id="hora" className="form-control" ref={this.hora} min={this.props.desde} max={this.props.hasta} defaultValue={this.props.desde}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Cantidad">Cantidad de Personas</label>
                                <input type="number" id="Cantidad" min="1" max="15" className="form-control" ref={this.cant_personas}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Comentario">Comentario</label>
                                <textarea name="Comentario" form="usrform"  id="Comentario" className="form-control comentario" ref={this.comentario}></textarea>                  
                            </div>                            
                        </div>
                  </Container>
                </Modal.Body>
                
                <Modal.Footer>                   
                  <Button disabled={this.state.buttonDisabled} onClick={(event) => this.ReservaNueva(event)} >RESERVAR MI LUGAR</Button>
                  <Button onClick={this.props.onHide}>SALIR</Button>
                </Modal.Footer>
                <Loading show={this.state.preloader}/>
                <div className="avisos">
                    {this.state.mensaje}
                </div>
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
const LocacionWithRouter = withRouter(ModalReserva);
export default connect(mapStateToProps)(LocacionWithRouter);