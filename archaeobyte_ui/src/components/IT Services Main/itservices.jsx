import React from 'react';
import './itservices.css';

const ItServices = () => {
  return (
    <div className="at-a-glance-container">
      <h3 className="at-a-glance-title">At a Glance</h3>
      <h1 className="at-a-glance-main-title">We're Partners in Transformation</h1>
      <div className="at-a-glance-content">
        <div className="at-a-glance-stat">
          <div className="at-a-glance-icon">&#x1F30E;</div>
          <div className="at-a-glance-text">
            <strong>100+</strong> locations worldwide
          </div>
        </div>
        <div className="at-a-glance-stat">
          <div className="at-a-glance-chart">&#128200;</div>
          <div className="at-a-glance-text">
            <strong>$7 billion +</strong> annual revenue
          </div>
        </div>
      </div>
      <div className="at-a-glance-map">
        <div className="at-a-glance-world-map">
          <div className="at-a-glance-line at-a-glance-line-1"></div>
          <div className="at-a-glance-line at-a-glance-line-2"></div>
          <div className="at-a-glance-line at-a-glance-line-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ItServices;
