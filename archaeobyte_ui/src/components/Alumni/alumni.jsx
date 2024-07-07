import React from 'react';
import './alumni.css';

const Alumni = () => {
  return (
    <div className="alumni-container">
      <h2 className="alumni-title">Learn the best from the alumni of</h2>
      <div className="alumni-logos">
        <img src="images/google.webp" alt="Google" className="alumni-logo" />
        <img src="images/Amazon_logo.svg" alt="Amazon" className="alumni-logo" />
        <img src="images/mit.png" alt="MIT University" className="alumni-logo" />
        <img src="images/iitdelhi.png" alt="IIT Delhi" className="alumni-logo" />
        <img src="images/microsoft.jpg" alt="Microsoft" className="alumni-logo" />
        <img src="images/iitbombay.jpg" alt="IIT Bombay" className="alumni-logo" />
      </div>
      <p className="alumni-more">and many more...</p>
    </div>
  );
};

export default Alumni;
