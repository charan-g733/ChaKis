import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './aea-domains.css';

const AEACards = () => {
  const navigate = useNavigate();

  const handleBrochureClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEnrollClick = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <div className="unique-card-domains" id="unique-cards-section">
      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/python.webp" alt="Python" />
          <div className="unique-card-details">
            <h4>Python Development</h4>
            <p>
              Skills you'll gain: Python, Django, Flask, HTML, CSS, JS & More....
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">4.9</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(95K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Beginner · Professional Certification Course 3 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1QlAK4BQz8waTLiL9B7yuK3enCQMhcKrB/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/uxdesign1.png" alt="front-end dev" />
          <div className="unique-card-details">
            <h4>Front-End Development</h4>
            <p>
              Skills you'll gain: HTML, CSS, React, JS, UX Design, SQL & More....
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">5.0</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(202K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Beginner · Professional Certification Course 3 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1RRQrJQ4TMhoXXqGlTLs5p0n9Z56t837E/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/java.webp" alt="Java" />
          <div className="unique-card-details">
            <h4>Java Development</h4>
            <p>
              Skills you'll gain: Java, Springboot, JSP & Servlets, RESTful Web Services, SQL and More.....
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">4.9</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(107K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Intermediate · Professional Certification Course 3 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1GLxtAWtCUUTAO5_yu5_OcKkc4zDjF6F5/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/MachineLearning.jpg" alt="Machine Learning" />
          <div className="unique-card-details">
            <h4>Machine Learning with Data Science & Data Analytics</h4>
            <p>
              Skills you'll gain: Python, Data Science, Data Visualization, Machine Learning, & More...
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">4.7</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(73K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Intermediate · Professional Certification Course 3 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1YcW5chwVekaFSKuGl5fHk8Z9h1sSZ2Se/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/aws.jpg" alt="AWS" />
          <div className="unique-card-details">
            <h4>Cloud Computing in AWS with DevOps</h4>
            <p>
              Skills you'll gain: Cloud computing, AWS all services, DevOps, Jenkins, Git & More....
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">4.8</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(155K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Intermediate · Professional Certification Course 3 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1Julc6wUZ6C8oAh-kR2-xREDB023coPgr/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/full_stack_aea_domain.png" alt="AWS" />
          <div className="unique-card-details">
            <h4>Full Stack Web Development</h4>
            <p>
              Skills you'll gain: Frontend, Backend, Databases, APIs, Authentication, Deployment & More....
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">5.0</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(233K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Intermediate · Professional Certification Course 5 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1ifJnjfgchxPSS7mO6FWu-hAiqMpb-iGo/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

      <div className="unique-card-link">
        <div className="unique-card">
          <img src="images/cyber_security_aea_domain.jpeg" alt="AWS" />
          <div className="unique-card-details">
            <h4>Cyber Security</h4>
            <p>
              Skills you'll gain: Network Security, Cryptography, Ethical hacking, Penetration testing, Malware analysis & More....
            </p>
            <div className="unique-rating">
              <span className="unique-rating-value">4.7</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(162K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Intermediate · Professional Certification Course 3 months
            </p>
            <button 
              className="unique-brochure-button"
              onClick={() => handleBrochureClick("https://drive.google.com/file/d/1C7JHoi24Q9YuMVLMrSDHp_rdukHXvJed/view?usp=sharing")}
            >
              <FontAwesomeIcon icon={faEye} /> View  Brochure
            </button>
            <button className="unique-enroll-button" onClick={handleEnrollClick}>
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AEACards;
