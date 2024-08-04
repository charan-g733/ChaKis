import React from 'react';
import './benefits.css';

const DataAnalystCard = () => {
    const handleCardClick = () => {
        window.location.href = "https://forms.gle/sZHvdzLdJr1vPqVW6";
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
                    <div className="unique-certificate" onClick={handleCardClick}>
                        <img src="images/fsd.jpg" alt="Google Data Analytics" />
                        <div className="unique-certificate-details">
                            <h4>Full Stack Development</h4>
                            <p>Skills you'll gain: Mongo, Express JS, React/Angular, Node, Backend Language...</p>
                            <div className="unique-rating">
                                <span className="unique-rating-value">4.8</span>
                                <span className="unique-rating-star">★</span>
                                <span className="unique-rating-text">(137K reviews)</span>
                            </div>
                            <p className="unique-rating-description">Beginner · Professional Certification Course 3 months</p>
                        </div>
                    </div>
                    <div className="unique-certificate" onClick={handleCardClick}>
                        <img src="images/aws.jpg" alt="IBM Data Analyst" />
                        <div className="unique-certificate-details">
                            <h4>AWS Cloud Computing</h4>
                            <p>Skills you'll gain: AWS Dashboard, DevOps, S3, EC2, AWS Lambda, RDS, Dynamo DB...</p>
                            <div className="unique-rating">
                                <span className="unique-rating-value">4.7</span>
                                <span className="unique-rating-star">★</span>
                                <span className="unique-rating-text">(18K reviews)</span>
                            </div>
                            <p className="unique-rating-description">Beginner · Professional Certification Course 3 months</p>
                        </div>
                    </div>
                </div>
                <div className="unique-explore-certificates">
                    <a href="/AEA">Explore all Courses</a>
                    
                </div>
            </div>
        </div>
    );
};

export default DataAnalystCard;
