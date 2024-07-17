import React from 'react';
import CountUp from 'react-countup';
import './number.css';

const Numbers = () => {
  return (
    <div className="credentials-container">
      <div className="credentials-header">
        <h2>Get Internship with Innovate Program</h2>
        <p>
          Whether you're an Undergraduate, a Pass-out, or Looking for a job, gain the right skills required in the market by registering for the Innovate Internship Program.
        </p>
        <button className="credentials-button">Register for Internship</button>
      </div>
      <div className="credentials-stats">
        <div className="credentials-stat">
          <h3>
            <CountUp start={0} end={73} suffix="K+" duration={2.5} />
          </h3>
          <p>Join over 3000 individuals who have earned an Internship</p>
        </div>
        <div className="credentials-stat">
          <h3>
            <CountUp start={0} end={88} suffix="%" duration={2.5} />
          </h3>
          <p>Professionals who stated ArchaeoByte Innovate Program have enhanced their careers</p>
        </div>
        <div className="credentials-stat">
          <h3>
            <CountUp start={0} end={95} suffix="%" duration={2.5} />
          </h3>
          <p>Skilled talent who gained confidence in IT Industry and Infrastructure</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
