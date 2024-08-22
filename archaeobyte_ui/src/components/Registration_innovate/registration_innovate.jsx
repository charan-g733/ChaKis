import React, { useState } from 'react';
import './registration_innovate.css'; // Ensure this CSS file includes the modal styles
import axios from 'axios';

const Registration_innovate = ({ domain }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    year_of_passout: '',
    todays_date: '', // New state for today's date
    domain: domain || '',
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
      await axios.post('http://develet.in:5000/api/registrations_innovate', formData);
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
      <form onSubmit={handleSubmit}>
        <h2 className="title" style={{ fontSize: '27px' }}>
          Enroll for{' '}
          <span className="dev" style={{ fontSize: '30px' }}>Dev</span>
          <span className="elet" style={{ fontSize: '30px' }}>Elet</span>{' '}
          INNOVATE Program
        </h2>

        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={formData.name ? 'filled' : ''} required />
        </label>
        <label>
          E-Mail ID:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={formData.email ? 'filled' : ''} required />
        </label>
        <label>
          Contact Number:
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className={formData.mobile ? 'filled' : ''} required />
        </label>
        <label>
          College/University:
          <input type="text" name="college" value={formData.college} onChange={handleChange} className={formData.college ? 'filled' : ''} required />
        </label>
        <label>
          Year Of Passout:
          <input type="text" name="year_of_passout" value={formData.year_of_passout} onChange={handleChange} className={formData.year_of_passout ? 'filled' : ''} required />
        </label>
        <label>
          Today's Date:
          <input type="date" name="todays_date" value={formData.todays_date} onChange={handleChange} className={formData.todays_date ? 'filled' : ''} required />
        </label>

        <fieldset>
          <legend>Select Domain:</legend>
          {/* Make sure the domain selected by the card is pre-selected */}
          {/* ...radio inputs for domain... */}
          <label>
            <input
              type="radio"
              name="domain"
              value="Data Analytics"
              checked={formData.domain === 'Data Analytics'}
              onChange={handleChange}
            />
            Data Analytics
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Full Stack Web Development"
              checked={formData.domain === 'Full Stack Web Development'}
              onChange={handleChange}
            />
            Full Stack Web Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Data Science"
              checked={formData.domain === 'Data Science'}
              onChange={handleChange}
            />
            Data Science
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
              value="Cloud Computing (AWS)"
              checked={formData.domain === 'Cloud Computing (AWS)'}
              onChange={handleChange}
            />
            Cloud Computing (AWS)
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Machine Learning"
              checked={formData.domain === 'Machine Learning'}
              onChange={handleChange}
            />
            Machine Learning
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="AWS DevOps"
              checked={formData.domain === 'AWS DevOps'}
              onChange={handleChange}
            />
            AWS DevOps
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Java Development"
              checked={formData.domain === 'Java Development'}
              onChange={handleChange}
            />
            Java Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Android Development"
              checked={formData.domain === 'Android Development'}
              onChange={handleChange}
            />
            Android Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Python Flask Development"
              checked={formData.domain === 'Python Flask Development'}
              onChange={handleChange}
            />
            Python Flask Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Deep Learning"
              checked={formData.domain === 'Deep Learning'}
              onChange={handleChange}
            />
            Deep Learning
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
        
          <label>
        
            <input
              type="radio"
              name="domain"
              value="UX Design"
              checked={formData.domain === 'UX Design'}
              onChange={handleChange}
            />
            UX Design
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Power BI"
              checked={formData.domain === 'Power BI'}
              onChange={handleChange}
            />
            Power BI
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Cyber Security"
              checked={formData.domain === 'Cyber Security'}
              onChange={handleChange}
            />
            Cyber Security
          </label>
        </fieldset>
        {/* Rest of the fields including domain selection */}
        <label>
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={handleChange}
            required
          />
          I, Hereby confirm that the details provided are true to the best of my knowledge.
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

export default Registration_innovate;
