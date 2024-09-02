import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './benefits.css';

const DataAnalystCard = () => {
    const navigate = useNavigate();
    
    const handleCardClick = () => {
        navigate('/AEA');
    };

    const handleBrochureClick = (url) => {
        if (url.startsWith('http')) {
            window.open(url, "_blank", "noopener,noreferrer");
        } else {
            navigate(url);
        }
    };

    return (
        <div className="unique-container">
            <div className="unique-data-analyst-card" onClick={handleCardClick}>
                <div className="unique-data-analyst-header">
                    <h2>AEA Program -</h2>
                    <p><i>Aspire, Elevate, Accelerate into your Career</i></p>
                </div>
                <div className="unique-data-analyst-salary">
                    <p>Median Salary</p>
                    <div className="unique-salary-bars">
                        <div className="unique-all-occupations">
                            <span>College Degree and other Certification courses</span>
                            <span>₹3,50,000*</span>
                        </div>
                        <div className="unique-data-analyst">
                            <span>Gaining Right Skill & Experience from AEA Program</span>
                            <span>₹7,68,000**</span>
                        </div>
                    </div>
                </div>
                <div className="unique-job-openings">
                    <p>Job openings: 1,22,063**</p>
                </div>
                <div className="unique-testimonial">
                    <img src="images/umak.jpg" alt="Uma K" />
                    <blockquote>"The AWS Cloud Computing Course in AEA Program opened new doors to my career." – Ravinder S</blockquote>
                </div>
            </div>
            <div className="unique-recommended-certificates">
                <h3>Recommended Professional Courses</h3>
                <div className="unique-certificates">
                    <a href="/AEA" className="unique-card-link">
                        <div className="unique-card-fn">
                            <img src="images/uxdesign1.png" alt="Front-End Development" />
                            <div className="unique-card-details">
                                <h4>Front-End Development</h4>
                                <p>Skills you'll gain: HTML, CSS, React, JS, UX Design, SQL & More....</p>
                                <div className="unique-rating">
                                    <span className="unique-rating-value">5.0</span>
                                    <span className="unique-rating-star">★</span>
                                    <span className="unique-rating-text">(202K reviews)</span>
                                </div>
                                <p className="unique-rating-description">Beginner · Professional Certification Course 3 months</p>
                                <button 
                                    className="unique-brochure-button"
                                    onClick={() => handleBrochureClick("https://drive.google.com/file/d/1RRQrJQ4TMhoXXqGlTLs5p0n9Z56t837E/view?usp=sharing")}
                                >
                                    <FontAwesomeIcon icon={faEye} /> View Brochure
                                </button>
                                <button 
                                    className="unique-enroll-button"
                                    onClick={() => navigate('/AEA')}
                                >
                                    <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href="/AEA" className="unique-card-link">
                        <div className="unique-card-fn">
                            <img src="images/aws.jpg" alt="AWS Cloud Computing" />
                            <div className="unique-card-details">
                                <h4>Cloud Computing in AWS with DevOps</h4>
                                <p>Skills you'll gain: Cloud computing, AWS all services, DevOps, Jenkins, Git & More....</p>
                                <div className="unique-rating">
                                    <span className="unique-rating-value">4.8</span>
                                    <span className="unique-rating-star">★</span>
                                    <span className="unique-rating-text">(155K reviews)</span>
                                </div>
                                <p className="unique-rating-description">Intermediate · Professional Certification Course 3 months</p>
                                <button 
                                    className="unique-brochure-button"
                                    onClick={() => handleBrochureClick("https://drive.google.com/file/d/1Julc6wUZ6C8oAh-kR2-xREDB023coPgr/view?usp=sharing")}
                                >
                                    <FontAwesomeIcon icon={faEye} /> View Brochure
                                </button>
                                <button 
                                    className="unique-enroll-button"
                                    onClick={() => navigate('/AEA')}
                                >
                                    <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="unique-explore-certificates">
                    <a href="/AEA">Explore all Courses</a>
                </div>
            </div>
        </div>
    );
};

export default DataAnalystCard;
