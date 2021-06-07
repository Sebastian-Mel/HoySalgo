//import './Carrusel.css';
import React, { Component, Fragment} from "react";

class Carrusel extends  Component
{
  constructor(props)
  {
    super(props);
    this.state ={
                  userData: null,
                };
  }
  handleLogin = (user) =>
  {
    this.setState(
      {
        userData: user,
      },
      //() => {
        //localStorage.setItem(USER_LS_KEY, JSON.stringify(user));
     // }
    );      
  };
  render()
  {
    return(
      <Fragment>
        <div className="slide-one-item home-slider owl-carousel">
            <div className="site-blocks-cover overlay" style={ { backgroundImage: `url(https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg)` } } data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">
                    <span className="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">Disponible este Viernes!!</span>
                    <h1 className="mb-2">Negocio 1</h1>
                    <p className="mb-5"><strong className="h2 text-success font-weight-bold">200 reservas confirmadas</strong></p>
                    <p><a href={() => false} className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">Yo tambien quiero reservar!</a></p>
                </div>
                </div>
            </div>
            </div> 

            <div className="site-blocks-cover overlay" style={ { backgroundImage: `url(https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg)` } }  data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">              
                    <h1 className="mb-2">Negocio 2</h1>
                    <p className="mb-5"><strong className="h2 text-success font-weight-bold">200 reservas confirmadas</strong></p>
                    <p><a href={() => false} className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">Yo tambien quiero reservar!</a></p>
                </div>
                </div>
            </div>
            </div>

            <div className="site-blocks-cover overlay" style={ { backgroundImage: `url(https://conceptodefinicion.de/wp-content/uploads/2014/05/imagen.jpg)` } }  data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">              
                    <h1 className="mb-2">Negocio 3</h1>
                    <p className="mb-5"><strong className="h2 text-success font-weight-bold">200 reservas confirmadas</strong></p>
                    <p><a href={() => false} className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">Yo tambien quiero reservar!</a></p>
                </div>
                </div>
            </div>
            </div> 
        </div>
      </Fragment>
    )
  }
}
export default Carrusel;
