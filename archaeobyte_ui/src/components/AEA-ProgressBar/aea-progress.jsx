import React from 'react';
import { FaLaptopCode, FaUserGraduate, FaUserTie, FaMicrochip, FaProjectDiagram, FaRupeeSign } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { SlEarphonesAlt } from "react-icons/sl";



import './aea-progress.css';

const AeaProgress = () => {
  return (
    <div className="progress-container">
      <div className="progress-steps">
        <div className="step">
        <FaChalkboardTeacher
        className="icon" />
          <p>Get 1:1 Training from Top mentors </p>
          <span>(8 weeks)</span>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <FaUserGraduate className="icon" />
          <p>Real-Time industry experience through Internship</p>
          <span>(4 weeks)</span>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <FaUserTie className="icon" />
          <p>Build Your Linkedin Profile like a Pro</p>
          <span>(1 week)</span>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <CgFileDocument  className="icon" />
          <p>Prepare your ATS Friendly Resume</p>
          <span>(1 week)</span>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <SlEarphonesAlt  className="icon" />
          <p>Excel your confidence through Mock Interviews</p>
          <span>(1 week)</span>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <FaRupeeSign className="icon" />
          <p>Land your Dream IT job with our Referral Program</p>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default AeaProgress;
