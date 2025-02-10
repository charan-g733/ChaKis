import React, { useRef } from 'react';
import CountUp from 'react-countup';
import useOnScreen from '../../hooks/useOnScreen';
import './number.css';
import NavLink from 'react-bootstrap/esm/NavLink';

const Numbers = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div className="credentials-container">
      <div className="credentials-header">
        <h2>World-class Internship for You with Innovate Program</h2>
        <p>
          Whether you're an Undergraduate, a Pass-out, or Looking for a job,
          gain the right skills required in the market by registering for the
          Innovate Internship Program.
        </p>
        <button className="credentials-button">
          <NavLink href="/Innovate">Register for Internship</NavLink>
        </button>
      </div>
      <div ref={ref} className={`credentials-stats fade-in ${onScreen ? 'show' : ''}`}>
        <div className="credentials-stat">
          <h3>
            {onScreen && <CountUp start={0} end={7285} suffix="" duration={2.5} />}
          </h3>
          <p>Join over 3000 individuals who have earned an Internship</p>
        </div>
        <div className="credentials-stat">
          <h3>
            {onScreen && <CountUp start={0} end={88} suffix="%" duration={2.5} />}
          </h3>
          <p>
            Professionals who stated DevElet Innovate Program have enhanced
            their careers
          </p>
        </div>
        <div className="credentials-stat">
          <h3>
            {onScreen && <CountUp start={0} end={95} suffix="%" duration={2.5} />}
          </h3>
          <p>
            Skilled talent who gained confidence in IT Industry and
            Infrastructure
          </p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
