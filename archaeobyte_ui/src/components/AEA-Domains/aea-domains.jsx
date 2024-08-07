import React from "react";
import "./aea-domains.css";

const AEACards = () => {
  const redirectUrl = "https://forms.gle/FreTkB3M1Rpyhvah7";

  return (
    <div className="unique-card-domains" id="unique-cards-section">
      <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="unique-card-link">
        <div className="unique-card">
          <img src="images/fsd.jpg" alt="Full Stack Development" />
          <div className="unique-card-details">
            <h4>Full Stack Development</h4>
            <p>
              Skills you'll gain: Mongo, Express JS, React/Angular, Node, Backend
              Language & more....
            </p> 
            <div className="unique-rating">
              <span className="unique-rating-value">4.8</span>
              <span className="unique-rating-star">★</span>
              <span className="unique-rating-text">(137K reviews)</span>
            </div>
            <p className="unique-rating-description">
              Beginner · Professional Certification Course 3 months
            </p>
          </div>
        </div>
      </a>
      
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
          </div>
        </div>
      </a>
    </div>
  );
};

export default AEACards;
