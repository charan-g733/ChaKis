import React from "react";
import "./bussiness.css";
import { Link } from "react-router-dom";

const Bussiness = () => {
  return (
    <div className="bussiness-container">
      <Link to="/" className="bussiness-back">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>
      <div className="bussiness-inner-container">
        <div>
          <h1 className="bussiness-title">Get your demo</h1>
          <p className="bussiness-description">
            Tell us your needs and we’ll start on a custom plan to drive
            results.
          </p>
          <div className="bussiness-benefits">
            <p>With Udemy as your learning partner, you can:</p>
            <ul>
              <li>
                Train your entire workforce with over 25,000+ courses in 15
                languages
              </li>
              <li>
                Prep employees for over 200 industry-recognized certification
                exams
              </li>
              <li>
                Develop highly skilled tech teams in risk-free practice
                environments
              </li>
              <li>
                Identify emerging skills gaps, learning trends, and industry
                benchmarks
              </li>
              <li>
                Integrate content with your existing learning management system
              </li>
            </ul>
          </div>
        </div>
        <form className="bussiness-demo-form">
          <div className="bussiness-form-row">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>
          <div className="bussiness-form-row">
            <input type="email" placeholder="Work Email *" required />
            <input type="text" placeholder="Phone Number *" required />
          </div>
          <div className="bussiness-form-row">
            <select required>
              <option>Where are you located? *</option>
              <option>Location 1</option>
              <option>Location 2</option>
            </select>
            <input type="text" placeholder="Company Name *" required />
          </div>
          <div className="bussiness-form-row">
            <select required>
              <option>Company Size *</option>
              <option>1-50</option>
              <option>51-200</option>
            </select>
            <select required>
              <option>Number of learners *</option>
              <option>1-50</option>
              <option>51-200</option>
            </select>
          </div>
          <div className="bussiness-form-row">
            <input type="text" placeholder="Job Title *" required />
            <select required>
              <option>Job Level *</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
            </select>
          </div>
          <textarea placeholder="What are your organization's training needs? (Optional)"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Bussiness;
