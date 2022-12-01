import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-0 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Selamat Datang </h4>
            <h1 className="text-light mb-4">di Website Honda Auto Tangerang</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Selamat Datang </h4>
            <h1 className="text-light mb-4">di Website Honda Auto Tangerang</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Selamat Datang </h4>
            <h1 className="text-light mb-4">di Website Honda Auto Tangerang</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="https://www.google.com/maps/place/Honda+Arta+Cikupa/@-6.222955,106.528969,16z/data=!4m5!3m4!1s0x0:0xd203f9509b6c5968!8m2!3d-6.2229553!4d106.5289686?hl=en">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
