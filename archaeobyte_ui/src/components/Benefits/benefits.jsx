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
                    <blockquote>"The Full Stack Web Development Course in AEA Program opened new doors to my career." – Ravinder S</blockquote>
                </div>
            </div>
            <div className="unique-recommended-certificates">
                <h3>Recommended Professional Courses</h3>
                <div className="unique-certificates">
                    <a href="/AEA" className="unique-card-link">
                        <div className="unique-card-fn">
                            <img src="images/full_stack_aea_domain.png" alt="Full Stack Web Development" />
                            <div className="unique-card-details">
                                <h4>Full Stack Web Development</h4>
                                <p>Skills you'll gain: Frontend, Backend, Databases, APIs, Authentication, Deployment & More....</p>
                                <div className="unique-rating">
                                    <span className="unique-rating-value">5.0</span>
                                    <span className="unique-rating-star">★</span>
                                    <span className="unique-rating-text">(233K reviews)</span>
                                </div>
                                <p className="unique-rating-description">Beginner · Professional Certification Course 5 months</p>
                                <button 
                                    className="unique-brochure-button"
                                    onClick={() => handleBrochureClick("https://drive.google.com/file/d/1ifJnjfgchxPSS7mO6FWu-hAiqMpb-iGo/view?usp=sharing")}
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
                            <img src="images/cyber_security_aea_domain.jpeg" alt="Cyber Security" />
                            <div className="unique-card-details">
                                <h4>Cyber Security</h4>
                                <p>Skills you'll gain: Network Security, Cryptography, Ethical hacking, Penetration testing, Malware analysis & More....</p>
                                <div className="unique-rating">
                                    <span className="unique-rating-value">4.7</span>
                                    <span className="unique-rating-star">★</span>
                                    <span className="unique-rating-text">(162K reviews)</span>
                                </div>
                                <p className="unique-rating-description">Intermediate · Professional Certification Course 3 months</p>
                                <button 
                                    className="unique-brochure-button"
                                    onClick={() => handleBrochureClick("https://drive.google.com/file/d/1C7JHoi24Q9YuMVLMrSDHp_rdukHXvJed/view?usp=sharing")}
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
