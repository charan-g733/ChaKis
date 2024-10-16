import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import NavLink from "react-bootstrap/esm/NavLink";

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
        {/* New banner slide with uploaded image */}
        <div className="slide">
          <img
            src="images/banner7.png"
            alt="DevElet Awards Banner"
            className="bannerimage"
          />
          <div className="box3">
            <p className="box3-text">
              Nominate yourself for the Best Educators Award of the Year-2024
            </p>
              <NavLink
                className="nominate-button"
                href="https://forms.gle/QqjtrAuAumBiLf7c6"
              >
                Nominate
              </NavLink>
            
          </div>
          <div className="nominate-button-container">
            <NavLink
              className="nominate3-button"
              href="https://forms.gle/QqjtrAuAumBiLf7c6"
            >
              Nominate
            </NavLink>
          </div>
        </div>

        {/* Existing slides */}
        <div className="slide">
          <img src="images/banner6.jpg" alt="Slide 1" className="bannerimage" />
          <div className="box1">
            <h1 className="box-title">
              Invest in learning that grows with you
            </h1>
            <p className="box-text">
              Preparing you for Today and Tomorrow's challenges.
            </p>
          </div>
        </div>

        <div className="slide">
          <img src="images/banner4.jpg" alt="Slide 2" />
          <div className="box2">
            <h1 className="box-title">Empower Your Future</h1>
            <p className="box-text">
              Stay ahead and maintain a competitive edge with Skills that are
              needed to thrive in an ever-changing technological landscape
            </p>
            <div className="button-container">
              <NavLink className="button individual" href="/">
                Plan for individuals
              </NavLink>
              <NavLink className="button organization" href="/team">
                Plan for your organization
              </NavLink>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
