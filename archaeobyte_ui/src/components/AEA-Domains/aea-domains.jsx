import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import "./aea-domains.css";

const AEACards = () => {
  const redirectUrl = "https://forms.gle/V1vnjutjPu1QQeS39";

  const handleBrochureClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="unique-card-domains" id="unique-cards-section">
      
      <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="unique-card-link">
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
            <button 
              className="unique-enroll-button"
              onClick={() => handleBrochureClick("https://forms.gle/V1vnjutjPu1QQeS39")}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
            
          </div>
        </div>
      </a>
      
      <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="unique-card-link">
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
            <button 
              className="unique-enroll-button"
              onClick={() => handleBrochureClick("https://forms.gle/V1vnjutjPu1QQeS39")}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
            
          </div>
        </div>
      </a>

      <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="unique-card-link">
        <div className="unique-card">
          <img src="images/java.webp" alt="Java" />
          <div className="unique-card-details">
            <h4>Java Development</h4>
            <p>
              Skills you'll gain: Java, Springboot, JSP & Servlets, RESTful Web
              Services, SQL and More.....
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
            <button 
              className="unique-enroll-button"
              onClick={() => handleBrochureClick("https://forms.gle/V1vnjutjPu1QQeS39")}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
            
          </div>
        </div>
      </a>

      <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="unique-card-link">
        <div className="unique-card">
          <img src="images/MachineLearning.jpg" alt="Machine Learning" />
          <div className="unique-card-details">
            <h4>Machine Learning with Data Science & Data Analytics</h4>
            <p>
              Skills you'll gain: Python, Data Science, Data Visualization,
              Machine Learning, & More...
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
            <button 
              className="unique-enroll-button"
              onClick={() => handleBrochureClick("https://forms.gle/V1vnjutjPu1QQeS39")}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
            
          </div>
        </div>
      </a>

      <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="unique-card-link">
        <div className="unique-card">
          <img src="images/aws.jpg" alt="AWS" />
          <div className="unique-card-details">
            <h4>Cloud Computing in AWS with DevOps </h4>
            <p>
              Skills you'll gain: Cloud computing, AWS all services, DevOps,
              Jenkins, Git & More....
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
            <button 
              className="unique-enroll-button"
              onClick={() => handleBrochureClick("https://forms.gle/V1vnjutjPu1QQeS39")}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Enroll For Course
            </button>
            
          </div>
        </div>
      </a>
    </div>
  );
};

export default AEACards;
