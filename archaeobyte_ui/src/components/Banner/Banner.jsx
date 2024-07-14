import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

// Banner component
const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div className="slide">
          <img src= "images/banner6.jpg" alt="Slide 1" />
          <div className="box1">
            <h1 className="box-title">Invest in learning that grows with you</h1>
            <p className="box-text"> Preparing you for Today and Tomorrow's challenges.</p>
          </div>
        </div>
        <div className="slide">
          <img src="images/banner4.jpg" alt="Slide 2" />
          <div className="box2">
            <h1 className="box-title">Empower Your Future</h1>
            <p className="box-text">Stay ahead and maintain a competitive edge with Skills that are needed to thrive in an ever-changing technological landscape</p>
            <div className="button-container">
              <div className="button individual">Plan for individuals</div>
              <div className="button organization">Plan for your organization</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
