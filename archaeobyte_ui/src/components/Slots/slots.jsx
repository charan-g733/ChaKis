import React from "react";
import "./slots.css";
import NavLink from "react-bootstrap/esm/NavLink";

const Slots = () => {
  return (
    <div className="custom-container">
      <div className="le">
        <div className="custom-heading">
          Programs that will transform your Software Engineering Career
        </div>

        <div className="custom-subheading">
          Recognized as the Greatest Brand in Upskilling & Career Development
        </div>

        <div className="custom-badges-wrapper">
          <div className="custom-badges">
            <img src="images/sch_logo.png" alt="SCH Logo" />
          </div>
          <div className="custom-badges">
            <img src="images/aicte.png" alt="AICTE Logo" />
          </div>
        </div>
      </div>

      <div className="custom-cards">
        <div className="custom-card">
          <div className="custom-card-header">
            <span className="aea-span" >INNOVATE Program</span>
          </div>
          <div className="custom-card-body">
            <div className="custom-card-tag">
              <span>Get Real Time Skills through Internship</span>
            </div>
            <div className="custom-card-title">
              Learn through Hands-on Experience on Real Time Projects & become
              Industry Ready
            </div>
            <div className="custom-card-button-wrapper">
              <button className="custom-card-button">
                <NavLink href="/Innovate">
                  Register for Internship Program
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card-header">
            <span className="aea-span">AEA Program</span>
          </div>
          <div className="custom-card-body">
            <div className="custom-card-tag">
              <span>Learn from Scratch & Excel your Skills</span>
            </div>
            <div className="custom-card-title">
              Master the Right skill you deserve and become Market Ready
              Software Engineer
            </div>
            <div className="custom-card-button-wrapper">
              <button className="custom-card-button">
                <NavLink href="/AEA">
                  Register for Free AEA Master class
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slots;
