import React, { Component } from "react";
import Slider from "react-slick";
import "../../styles/testimonals/Testimonals.css"
import testimonals_1 from "../../images/testimonals_1.jpg"
import testimonals_2 from "../../images/testimonals_2.jpg"
import testimonals_3 from "../../images/testimonals_3.jpg"
const testimonalsData =[
  {
    id : 1,
    image:testimonals_1,
    details:"A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. ",
  },
  {
    id: 2,
    image:testimonals_2,
    details:"A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. ",
  },
  {
    id:3,
    image:testimonals_3,
    details:"A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. ",

  }
]

export default class Testimonals extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="testimonals_container">
        <h2 className="testimonals_heading"> Testimonals</h2>
        <Slider {...settings}>
          <div className="testimonal_says">
                <div className="testimonal_image_wrapper">
                  <img src={testimonals_1} alt="image first" className="testmonials_image"/>
                </div>
                <div className="testimonals_desc">
                  <p className="testimonals_text">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div className="line_divider"></div>
                <div className="name_wrapper">
                  <h2 className="name_test">Juliya Morli</h2>
                </div>
                </div>
                
          </div>
          <div className="testimonal_says">
                <div className="testimonal_image_wrapper">
                  <img src={testimonals_2} alt="image first" className="testmonials_image"/>
                </div>
                <div className="testimonals_desc">
                  <p className="testimonals_text">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div className="line_divider"></div>
                <div className="name_wrapper">
                  <h2 className="name_test">Suprim Ito</h2>
                </div>
                </div>
          </div><div className="testimonal_says">
                <div className="testimonal_image_wrapper">
                  <img src={testimonals_3} alt="image first" className="testmonials_image"/>
                </div>
                <div className="testimonals_desc">
                  <p className="testimonals_text">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                  <div className="line_divider"></div>
                <div className="name_wrapper">
                  <h2 className="name_test">Mind Risers </h2>
                </div>
                </div>
          </div>
         
        </Slider>
      </div>
    );
  }
}