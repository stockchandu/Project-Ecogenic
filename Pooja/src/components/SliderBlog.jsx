import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
export default class SliderBlog extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider1">
            <div className="sliderImage">
              <img src="Rectangle 7.png" alt="Logo" />
            </div>
            <div className="sliderText">
              <p>What are your thoughts on Shein?</p>
            </div>
          </div>
          <div className="slider1">
            <div className="sliderImage">
              <img src="Rectangle 7.png" alt="Logo" />
            </div>
            <div className="sliderText">
              <p>What are your thoughts on Shein?</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
