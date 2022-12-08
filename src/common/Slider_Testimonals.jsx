import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/testimonals/Testimonals.css"
export default class Slider_Testimonals extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
      <div className="slider_container">
        <h2>Swipe To Slide</h2>
        <Slider className="slider" {...settings}>
          <div className="slider_component">
            <h3>1</h3>
          </div>
          <div className="slider_component">
            <h3>2</h3>
          </div>
          <div className="slider_component">
            <h3>3</h3>
          </div>
        </Slider>
      </div>
     </div>
    );
  }
}