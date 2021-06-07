import React, { Component } from "react";

import './PreLoader.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Loading extends Component{
  render() {
    if (this.props.show)
    {
      return (
            <div className="overlay_">
                <div className="overlay__wrapper_">
                    <div className="overlay__spinner_">
                    <Loader
                        type="Puff"
                        color="#f68235"
                        height={150}
                        width={150}                    
                      />
                    </div>
                </div>
            </div>       
      );
    }
    return null;
  }
}
export default Loading;

/*
Audio	<Loader type="Audio" color="#00BFFF" height={80} width={80} />
Ball-Triangle	<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
Bars	<Loader type="Bars" color="#00BFFF" height={80} width={80} />
Circles	<Loader type="Circles" color="#00BFFF" height={80} width={80}/>
Grid	<Loader type="Grid" color="#00BFFF" height={80} width={80} />
Hearts	<Loader type="Hearts" color="#00BFFF" height={80} width={80} />
Oval	<Loader type="Oval" color="#00BFFF" height={80} width={80} />
Puff	<Loader type="Puff" color="#00BFFF" height={80} width={80} />
Rings	<Loader type="Rings" color="#00BFFF" height={80} width={80} />
TailSpin	<Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
ThreeDots	<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
*/