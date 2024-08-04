import React from 'react';
import './feedback.css';

const FeedbackLinks = () => {
  return (
    <div className="fl-container">
      <div className="fl-card">
        <img src="images/DevElet_with_name.png" alt="DevElet Logo" className="fl-logo" />
        <div className="fl-links">
            <h1> DevElet Feedback Important Links Gateway</h1>
          <a href="https://docs.google.com/spreadsheets/d/1fkDIMszkMS38sa5vNGMQECdZWpTGQDYbH4rCs6vZHu8/edit?usp=sharing" className="fl-link">Students Feedback</a>
          <a href="https://docs.google.com/spreadsheets/d/14bRsBCDJ7zobiVurvyJceaRZ6S-A7703JnMDXkMmKGY/edit?usp=sharing" className="fl-link">Placed Students Feedback </a>
          <a href="/link3" className="fl-link">Internship Feedback</a>
        </div>
      </div>
    </div>
  );
};

export default FeedbackLinks;
