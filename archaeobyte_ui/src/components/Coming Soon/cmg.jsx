import React from 'react';
import './cmg.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="content-cmg">
        <h3 className='h3_cmg'>SITE UNDER RECONSTRUCTION</h3>
        <h1 className='h1_cmg'>COMING SOON</h1>
        <div className="progress-bar-cmg">
          <div className="progress-cmg" style={{ width: '62%' }}></div>
        </div>
        <p className='p_cmg'>62%</p>
      </div>
    </div>
  );
};

export default ComingSoon;
