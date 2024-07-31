import React from 'react';
import './survey.css';

const Survey = () => {
  return (
    <div className="learning-component-container">
      <div className="learning-component-images">
        <div className="learning-component-image learning-component-image-top">
          <img src="./images/survey1.jpg" alt="Learning  1" />
        </div>
        <div className="learning-component-image learning-component-image-middle">
          <img src="./images/survey2.webp" alt="Learning 2" />
        </div>
        <div className="learning-component-image learning-component-image-bottom">
          <img src="./images/survey3.webp" alt="Learning  3" />
        </div>
      </div>
      <div className="learning-component-content">
        <h2>World-class Digital Transformation</h2>
        <p>
          We Develop applications <strong>You Experienced Never before</strong>. Switch to  <strong>Digital Transformation</strong> with our IT Services.
          <br />
          <em>- DevElet Development Centre (2024)</em>
        </p>
        <button>Get In Touch</button>
      </div>
    </div>
  );
};

export default Survey;
