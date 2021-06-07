import React, { Component } from "react";

class Categorias extends  Component
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
        <div className="site-section site-section-sm bg-light">
            <div className="container">
                <div className="row mb-5">

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="property-entry">
                            <a href={() => false} className="">
                                <img src={'https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1'} alt="Image" className="img-fluid" />                                    
                            </a>
                            <div className="p-4 property-body">                                
                                <h2 className="property-title"><a href={() => false}>Boliche </a></h2>                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
export default Categorias;