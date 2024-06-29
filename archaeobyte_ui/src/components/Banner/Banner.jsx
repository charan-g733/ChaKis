import React from "react";
import Slider from "react-slick"; // Assuming you're using react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import "./Banner.css";

// Custom Arrow components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "25px" }}
      onClick={onClick}
    >
   
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "25px", zIndex: 1 }}
      onClick={onClick}
    >

    </div>
  );
}

// Banner component
const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="slide">
          <img src={banner1} alt="Slide 1" />
          <div className="text-box">Text Box Content</div>
        </div>
        <div className="slide">
          <img src={banner2} alt="Slide 2" />
          <div className="text-box">Text Box Content</div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
