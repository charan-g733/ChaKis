import React from "react";
import "./aea-banner.css";

const EducationBanner = () => {
  return (
    <div className="education-banner">
      <div className="education-banner-content">
        <div className="education-banner-text">
          <h1 className="education-banner-title">AEA Program</h1>
          <p className="education-banner-promo">
            <i>Aspire, Elevate, Accelerate</i>
          </p>
          <div className="education-banner-courses">
            <div className="education-banner-course">
              <h3>Training</h3>
              <p>
                {" "}
                Get certified Training by IBM, Infosys, Nasscom with Top
                Mentorship support{" "}
              </p>
            </div>
            <div className="education-banner-divider"></div>
            <div className="education-banner-course">
              <h3>Internship</h3>
              <p>
                Apply your skills and gain In-Hand Experience in our Internship
                Program.{" "}
              </p>
            </div>
            <div className="education-banner-divider"></div>
            <div className="education-banner-course">
              <h3>Placement Assistance</h3>
              <p>Get Placed at Top MNC's with Minumum 10LPA Salary.</p>
            </div>
          </div>
          <button className="education-banner-button">Register Now</button>
        </div>
        <div className="education-banner-image">
          <img src="images/aea-banner1.webp" alt="Online Education" />
        </div>
      </div>
    </div>
  );
};

export default EducationBanner;
