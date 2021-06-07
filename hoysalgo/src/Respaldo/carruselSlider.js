import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import Card from "./card";
import "./estiloCard.css"


import OwlCarousel from 'react-owl-carousel2';
import './style.css'; //Allows for server-side rendering.

export default class CustomSlider extends Component {
  render() {
    //const options =  {
        //adaptiveHeight: true,
        //*autoplay:true,*/
        
        //duration: 5,
       // shift:1
    //};
    const options = {
      items: 1,
      nav: false,
      rewind: true,
      autoplay: true
  };
    return (
      /*<div>
        
        <Slider  { ...settings }>
          <Card cardImage="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card cardImage="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card cardImage="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg"/>
        </Slider>
      </div>*/
      <OwlCarousel  ref="car" options={options}>
          <Card cardImage="https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card cardImage="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card cardImage="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?cs=srgb&dl=pexels-kaboompics-com-6267.jpg&fm=jpg"/>
        </OwlCarousel>
    );
  }
}