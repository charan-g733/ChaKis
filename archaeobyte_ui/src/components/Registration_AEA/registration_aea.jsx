import React, { useState } from 'react';
import './registration_aea.css';
import axios from 'axios';

const Registration_aea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    year_of_passout: '',
    domain: '',
    declaration: false
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://develet.in:5000/api/registrations', formData);
      console.log(response.data);  // Log response for debugging
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/reg_aea_bg_img1.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    color: '#333'
  };

  return (
    <div className="form-container" style={formStyle}>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thanks for registering!</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2 className="title" style={{ fontSize: '27px' }}>
          Enroll for{' '}
          <span className="dev" style={{ fontSize: '30px' }}>Dev</span>
          <span className="elet" style={{ fontSize: '30px' }}>Elet</span>{' '}
          AEA Program
        </h2>
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          E-Mail ID:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Contact Number:
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label>
        <label>
          College/University:
          <input type="text" name="college" value={formData.college} onChange={handleChange} required />
        </label>
        <label>
          Year Of Passout:
          <input type="text" name="year_of_passout" value={formData.year_of_passout} onChange={handleChange} required />
        </label>
        <fieldset>
          <legend>Select Domain:</legend>
          <label>
            <input
              type="radio"
              name="domain"
              value="Applied Machine Learning with Data Analytics & Data Science"
              checked={formData.domain === 'Applied Machine Learning with Data Analytics & Data Science'}
              onChange={handleChange}
            />
            Applied Machine Learning with Data Analytics & Data Science
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Java Backend Development"
              checked={formData.domain === 'Java Backend Development'}
              onChange={handleChange}
            />
            Java Backend Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Python Development"
              checked={formData.domain === 'Python Development'}
              onChange={handleChange}
            />
            Python Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Cloud Computing in AWS with DevOps"
              checked={formData.domain === 'Cloud Computing in AWS with DevOps'}
              onChange={handleChange}
            />
            Cloud Computing in AWS with DevOps
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Front-End Development"
              checked={formData.domain === 'Front-End Development'}
              onChange={handleChange}
            />
            Front-End Development
          </label>
        </fieldset>
        <label>
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={handleChange}
            required
          />
          I, hereby accept that I am interested in the program.
        </label>
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
  );
};

export default Registration_aea;
