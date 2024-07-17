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
        <h2>World-class learning for you</h2>
        <p>
          Pursue a <strong>promotion</strong>, a <strong>raise</strong>, or switch careers. 96% of learners who have taken a course <strong>report career benefits</strong>.
          <br />
          <em>- ArchaeoByte Leaners Outcome Survey, India (2024)</em>
        </p>
        <button>Particpate in Survey</button>
      </div>
    </div>
  );
};

export default Survey;
