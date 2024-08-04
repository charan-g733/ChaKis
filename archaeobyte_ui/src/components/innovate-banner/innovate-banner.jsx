import React from "react";
import "./innovate-banner.css";

function Innovate_Banner() {
  return (
    <div className="banner-container-innovate">
      <div className="content">
        <h4>100% QUALITY INTERNSHIPS</h4>
        <h1>
          Find Your Perfect Domain <br />
          And Enhance Your <span className="highlight"><></>Experience</span>
        </h1>
        <p>
          Explore our{" "}
          <span className="highlight">Leading Internship Domains </span> and
          join <span className="highlight">3000+</span> Online Registered
          Students.
        </p>
        <button className="explore-btn">Explore All Internships</button>
      </div>
      <div className="image-container">
        <img src="images/innovate5.webp" alt="Student" />
      </div>
    </div>
  );
}

export default Innovate_Banner;
