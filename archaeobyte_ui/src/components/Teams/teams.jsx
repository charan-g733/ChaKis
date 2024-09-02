import React, { useState } from "react";
import "./teams.css";
import Navigationbar from "../Navigationbar/navigation";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Bussiness = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    companyLocation: "",
    companyName: "",
    companySize: "",
    numberOfLearners: "",
    jobTitle: "",
    jobLevel: "",
    trainingNeeds: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/submit-demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          phoneNumber: "",
          companyLocation: "",
          companyName: "",
          companySize: "",
          numberOfLearners: "",
          jobTitle: "",
          jobLevel: "",
          trainingNeeds: "",
        });
      } else {
        alert("Failed to submit demo request.");
      }
    } catch (error) {
      console.error("Error submitting demo request:", error);
      alert("An error occurred while submitting the demo request.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navigationbar />
      <Header />
      <div className="bussiness-container">
        <div className="bussiness-inner-container">
          <div>
            <h1 className="bussiness-title">Get your demo</h1>
            <p className="bussiness-description">
              Get in touch with us to start driving innovational upskilling at
              your organisation.
            </p>
            <div className="bussiness-benefits">
              <p>With DevElet as your learning partner, you can:</p>
              <ul>
                <li>Train your entire workforce with all Leading Edge Technologies.</li>
                <li>Prep employees for industry-recognized certification exams</li>
                <li>Develop highly skilled tech teams in a professional environment</li>
                <li>Identify emerging skills gaps, learning trends, and industry benchmarks</li>
                <li>Integrate content with your existing learning management system</li>
              </ul>
            </div>
          </div>
          <form className="bussiness-demo-form" onSubmit={handleSubmit}>
            <div className="bussiness-form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="bussiness-form-row">
              <input
                type="email"
                name="workEmail"
                placeholder="Work Email *"
                value={formData.workEmail}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number *"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="bussiness-form-row">
              <input
                type="text"
                name="companyLocation"
                placeholder="Company Location *"
                value={formData.companyLocation}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name *"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="bussiness-form-row">
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
              >
                <option value="">Company Size *</option>
                <option value="1-50">1-50</option>
                <option value="51-100">51-100</option>
                <option value="100-150">100-250</option>
                <option value="250+">250+</option>
              </select>
              <select
                name="numberOfLearners"
                value={formData.numberOfLearners}
                onChange={handleChange}
                required
              >
                <option value="">Number of learners *</option>
                <option value="1-50">1-50</option>
                <option value="51-100">51-100</option>
                <option value="100-250">100-250</option>
                <option value="250+">250+</option>
              </select>
            </div>
            <div className="bussiness-form-row">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title *"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
              <select
                name="jobLevel"
                value={formData.jobLevel}
                onChange={handleChange}
                required
              >
                <option value="">Job Level *</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
              </select>
            </div>
            <textarea
              name="trainingNeeds"
              placeholder="What are your organization's training needs? (Optional)"
              value={formData.trainingNeeds}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Thanks for registering!</h2>
                <p>
                  <span className="note">Note:- </span>
                  Please check your mail for further communication.
                </p>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          )}


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bussiness;
