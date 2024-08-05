import React, { useRef } from "react";
import Slider from "react-slick";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"; // Optional: for custom styles

const AuthCarousel = () => {
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Login goToRegister={() => goToSlide(1)} />
        </div>
        <div>
          <Register goToLogin={() => goToSlide(0)} />
        </div>
      </Slider>
    </>
  );
};

export default AuthCarousel;
