import React, { Component } from "react";
import '../App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sponsor1 from "../Images/sponsor1.png";
import sponsor2 from "../Images/sponsor2.png";
import sponsor3 from "../Images/sponsor3.png";
import sponsor4 from "../Images/sponsor4.png";
import sponsor5 from "../Images/sponsor5.png";
import sponsor6 from "../Images/sponsor6.png";


class LogoSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className='sponsor-container'>
        <h2>Our Partners</h2>
        <Slider {...settings}>
          <div className='sponsor'>
            <img src={sponsor1} alt='' />
          </div>
          <div className='sponsor'>
            <img src={sponsor2} alt='' />
          </div>
          <div className='sponsor'>
            <img src={sponsor3} alt='' />
          </div>
          <div className='sponsor'>
            <img src={sponsor4} alt='' />
          </div>
          <div className='sponsor'>
            <img src={sponsor5} alt='' />
          </div>
          <div className='sponsor'>
            <img src={sponsor6} alt='' />
          </div>
        </Slider>
      </div>
    );
  }
}

export default LogoSlider;