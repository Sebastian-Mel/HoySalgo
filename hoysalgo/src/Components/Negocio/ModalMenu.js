import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button,Container } from "react-bootstrap";

import "./Negocio.css";

class ModalMenu extends Component
{
  constructor()
  {  
      super();       

      this.state = {  
          mensaje:'',        
          preloader:false
      }

  }
  componentDidMount(){
    const negocio=this.props.todosLosNegocios
  }
  render() {
    let pdf = "https://docs.google.com/viewer?url=https://recursos.hoysalgo.uy/menus/"+this.props.documento+"&embedded=true";

        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                        MENU
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid ">
                  <Container>
                    <iframe src={pdf} className="pdfDocumento"></iframe>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.props.onHide}>SALIR</Button>
                </Modal.Footer>
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