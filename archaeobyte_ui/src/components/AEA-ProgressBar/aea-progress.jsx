// ProgressSteps.js

import React from 'react';
import { FaLaptopCode, FaUserGraduate, FaUserTie, FaMicrochip, FaProjectDiagram, FaRupeeSign } from "react-icons/fa";
import './aea-progress.css';



 

const AeaProgress = () => {
  return (
    <div className="progress-steps">
      <div className="step">
        <FaLaptopCode className="icon" />
        <p>Learn to Code</p>
        <span>(30 weeks)</span>
      </div>
      <div className="arrow">→</div>
      <div className="step">
        <FaUserGraduate className="icon" />
        <p>Master Full Stack Development</p>
        <span>(40 weeks)</span>
      </div>
      <div className="arrow">→</div>
      <div className="step">
        <FaUserTie className="icon" />
        <p>Build Your Developer Profile like a Pro</p>
        <span>(40 weeks)</span>
      </div>
      <div className="arrow">→</div>
      <div className="step">
        <FaMicrochip className="icon" />
        <p>Specialize in a <span className="highlight">4.0 Technology</span></p>
        <span>(40 weeks)</span>
      </div>
      <div className="arrow">→</div>
      <div className="step">
        <FaProjectDiagram className="icon" />
        <p>Develop Industry Grade 4.0 Projects</p>
        <span>(20 weeks)</span>
      </div>
      <div className="arrow">→</div>
      <div className="step">
        <FaRupeeSign className="icon" />
        <p>With IRC 4.0, get supported till you achieve a <span className="highlight">₹24 LPA</span> job</p>
      </div>
    </div>
  );
};

export default AeaProgress;
