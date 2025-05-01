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

    // The handleShare function
    const handleShare = (e) => {
      e.preventDefault(); // Prevent default link behavior
  
      if (navigator.share) {
        navigator.share({
          title: 'DevElet Summer Internship Program – 2025',
          text: 'Experience. Learn. Grow with Us This Summer.',
          url: window.location.href, // Share the current page URL
        })
        .then(() => console.log('Successfully shared!'))
        .catch((error) => console.error('Error sharing:', error));
      } else {
        alert('Your browser does not support sharing functionality.');
      }
    };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {/* New banner slide with uploaded image */}

        {
  }
  <div className="slide">
          <img src="images/new_banner1.webp" alt="Slide 2" className="banner-image" />

          {/* Text Overlay */}
          <div className="banner-content">
            <h1 className="banner-heading">
              DevElet Summer Internship<br />Program (May to August 2025)
            </h1>
            <p className="banner-caption">
            Hyderabad | Job No. D00250510 | Internship
            </p>
            <div className="button-container">
              <NavLink href="/Innovate" className="banner-button">
                REGISTER NOW
              </NavLink>
              {/* Share Button with Icon */}
          <NavLink to="/" className="banner-button" onClick={handleShare}>
            <i className="fas fa-share-alt"></i> SHARE {/* FontAwesome Share Icon */}
          </NavLink>
            </div>
          </div>
        </div>

        {
        <div className="slide">
          <img
            src="images/NTEA_Banner1.JPG"
            alt="DevElet Awards Banner"
            className="bannerimage"
          />
          <div className="box3">
          <h1 className="box-title">National Teaching Excellence Awards 2024</h1>
            <p className="box-text">
              DevElet in Collaboration with CSC India honoured top educators from Pan-India level on auspicious occasion of National Education Day (11th Nov 2024)
            </p>
              <NavLink
                className="nominate-button"
                href="/gallery"
              >
                Learn more...
              </NavLink>
            

            
          </div>

          
          <div className="nominate-button-container">
            <NavLink
              className="nominate3-button"
              href="/gallery"
            >
              Learn more...
            </NavLink>
          </div>
        </div>
        
        }


        {
        
          
        
        }
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
