import React from "react";
import "./in_domains.css";

const InnovateCards = () => {
  const handleCardClick = () => {
    window.location.href = "https://forms.gle/4RNijxChXPwv8m929";
  };

  return (
    <div className="u-card-domains" id="internship-cards">
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/python.webp" alt="Python" />
        <div className="u-card-details">
          <h4>Python Development</h4>
          <p>Skills you'll gain: Python, Flask, & More...</p>
          <div className="u-rating">
            <span className="u-rating-value">4.8</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(501K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/java.webp" alt="Java" />
        <div className="u-card-details">
          <h4>Java Development</h4>
          <p>
            Skills you'll gain: Java, Springboot, Console based application &
            More....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.9</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(352K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/fsd.jpg" alt="FSD" />
        <div className="u-card-details">
          <h4>Full Stack Web Development</h4>
          <p>
            Skills you'll gain: React/Angular, Express, Node, Mongo/SQL &
            More.....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.9</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(395K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/DataScience.jpg" alt="Data Science" />
        <div className="u-card-details">
          <h4>Data Science</h4>
          <p>
            Skills you'll gain: Python, Machine Learning, Data Visualization,
            SQL...
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.7</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(421K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/DataAnalytics.jpg" alt="Data Analytics" />
        <div className="u-card-details">
          <h4>Data Analytics</h4>
          <p>Skills you'll gain: Python, Statistics, Scikit & More....</p>
          <div className="u-rating">
            <span className="u-rating-value">4.8</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(234K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/MachineLearning.jpg" alt="Machine Learning" />
        <div className="u-card-details">
          <h4>Machine Learning </h4>
          <p>
            Skills you'll gain: Machine Learning, ML Models, Prediction &
            classification, & More.....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.8</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(588K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/front-end-dev.jpg" alt="Front end development" />
        <div className="u-card-details">
          <h4>Front-End Development</h4>
          <p>Skills you'll gain: HTML, CSS, JS, SQL & more....</p>
          <div className="u-rating">
            <span className="u-rating-value">5.0</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(523K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/uxdesign.jpg" alt="UX design" />
        <div className="u-card-details">
          <h4>UX Design</h4>
          <p>
            Skills you'll gain: UX Design, Adobe, Figma tool, Designing &
            More....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.9</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(227K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/android1.jpg" alt="Android Development" />
        <div className="u-card-details">
          <h4>Android Development</h4>
          <p>
            Skills you'll gain: Android IDE, XML, Java/Kotlin, SQLLite Helper
            class & More....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.8</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(173K reviews)</span>
          </div>
          <p className="u-rating-description">
            Intermediate · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/aws.jpg" alt="AWS" />
        <div className="u-card-details">
          <h4>AWS Cloud Computing</h4>
          <p>
            Skills you'll gain: AWS EC2, S3, Dynamo DB, Management Console, &
            More.....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">5.0</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(491K reviews)</span>
          </div>
          <p className="u-rating-description">
            Beginner · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/AWSonDevops.png" alt="Devops on aws" />
        <div className="u-card-details">
          <h4>DevOps on AWS</h4>
          <p>
            Skills you'll gain: AWS Console, DevOps, Jenkins, GitHub & More....
          </p>
          <div className="u-rating">
            <span className="u-rating-value">4.6</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(299K reviews)</span>
          </div>
          <p className="u-rating-description">
            Intermediate · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/pythonflask.png" alt="Python flask" />
        <div className="u-card-details">
          <h4>Python Flask Development</h4>
          <p>Skills you'll gain: Python, Flask, SQL , Server & More......</p>
          <div className="u-rating">
            <span className="u-rating-value">4.8</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(450K reviews)</span>
          </div>
          <p className="u-rating-description">
            Intermediate · Virtual Internship 1 month
          </p>
        </div>
      </div>
      <div className="u-card" onClick={handleCardClick}>
        <img src="images/deeplearning.webp" alt="Python flask" />
        <div className="u-card-details">
          <h4>Deep Learning</h4>
          <p>Skills you'll gain: Python, Keras, CNN Models, RCNN Models, ANN & Many more......</p>
          <div className="u-rating">
            <span className="u-rating-value">4.8</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(303K reviews)</span>
          </div>
          <p className="u-rating-description">
            Intermediate · Virtual Internship 1 month
          </p>
        </div>
      </div>


      <div className="u-card" onClick={handleCardClick}>
        <img src="images/powerbi.png" alt="Python flask" />
        <div className="u-card-details">
          <h4>Power BI</h4>
          <p>Skills you'll gain: Data modeling & DAX, Report Creation, Data Visualization, Dashboard Creation & More......</p>
          <div className="u-rating">
            <span className="u-rating-value">4.6</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(224K reviews)</span>
          </div>
          <p className="u-rating-description">
            Intermediate · Virtual Internship 1 month
          </p>
        </div>
      </div>


      <div className="u-card" onClick={handleCardClick}>
        <img src="images/cybersecurity.jpg" alt="Python flask" />
        <div className="u-card-details">
          <h4>Cyber Security</h4>
          <p>Skills you'll gain: CIA triad, IAM , Federation, CNS, GDPR, HIPAA, HAshing & More......</p>
          <div className="u-rating">
            <span className="u-rating-value">4.7</span>
            <span className="u-rating-star">★</span>
            <span className="u-rating-text">(150K reviews)</span>
          </div>
          <p className="u-rating-description">
            Intermediate · Virtual Internship 1 month
          </p>
        </div>
      </div>

    </div>
  );
};

export default InnovateCards;
