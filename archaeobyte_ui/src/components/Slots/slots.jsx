import React from 'react';
import './slots.css';

const Slots = () => {
  return (
    <div className="custom-container">
      <div className='le'>
        <div className="custom-heading">
          Programs that will transform your Software Engineering Career
        </div>

        <div className="custom-subheading">
          Recognized as the Greatest Brand in Upskilling & Career Development
        </div>

        <div className="custom-badges">
          <img src="images/sch.png" alt="Badge 1" />
        </div>
      </div>

      <div className="custom-cards">
        <div className="custom-card">
          <div className="custom-card-header">
            <img src="images/slots1.png" alt="CCBP 4.0 Academy" className="custom-image" />
            <span>INNOVATE Program</span>
          </div>
          <div className="custom-card-body">
            <div className="custom-card-tag">
              <span>Get Real Time Skills through Internship</span>
            </div>
            <div className="custom-card-title">
              Learn through Hands-on Experience on Real Time Projects & become
              Industry Ready
            </div>
            <button className="custom-card-button">
              Register for Internship Program
            </button>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card-header">
            <img
              src="images/slots2.png"
              alt="Intensive 3.0"
              className="custom-image"
            />
            <span>AEA <br></br> Program</span>
          </div>
          <div className="custom-card-body">
            <div className="custom-card-tag">
              <span>Learn from Scratch & Excel your Skills</span>
            </div>
            <div className="custom-card-title">
              Master the Right skill you deserve and become Market Ready
              Software Engineer
            </div>
            <button className="custom-card-button">
              Register for Free Master class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slots;
