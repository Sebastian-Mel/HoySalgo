import React, { Component, Fragment } from "react";



class Carrusel extends  Component{

    constructor(props){
        super(props)
        this.state = {
          userValue: null,
          passValue: null,
        };
        console.log(props);
    }

    render() {
        return (
          <Fragment>
            <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg" class="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Negocio 1</h5>
                            <p className="mb-5"><strong className="h2 text-light font-weight-bold">200 reservas confirmadas</strong></p>
                            <p><a href={() => false} className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">Yo tambien quiero reservar!</a></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Negocio2</h5>
                            <p className="mb-5"><strong className="h2 text-light font-weight-bold">70 reservas confirmadas</strong></p>
                            <p><a href={() => false} className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">Yo tambien quiero reservar!</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Negocio3</h5>
                            <p className="mb-5"><strong className="h2 text-light font-weight-bold">3.000.150 reservas confirmadas</strong></p>
                            <p><a href={() => false} className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">Yo tambien quiero reservar!</a></p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
            </div>
          </Fragment>
        );
      }    
}
export default Carrusel;