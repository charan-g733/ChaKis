import React, { useState } from 'react';
import './Get_in_touch_form.css';
import axios from 'axios';

const Get_in_touch_form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    domain: ''
  });

  const [showModal, setShowModal] = useState(false); // State for modal visibility

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
      await axios.post('http://localhost:5000/api/it_services', formData);
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };


  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  const formStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/get_in_touch_form_bg.jpg)`,
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
        <h2 className="title" style={{ fontSize: '2rem', textAlign: 'center' }}>
          <span className="dev" style={{ fontSize: '2.5rem', color: 'blue' }}>Dev</span>
          <span className="elet" style={{ fontSize: '2.5rem', color: '#ff0000' }}>Elet</span>{' '}
          IT Services
        </h2>

        <label>
          Full Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={formData.name ? 'filled' : ''} 
            required 
          />
        </label>

        <label>
          Contact Number (with postal code):
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            className={formData.mobile ? 'filled' : ''} 
            required 
          />
        </label>

        <label>
          E-Mail ID:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={formData.email ? 'filled' : ''} 
            required 
          />
        </label>

        <label>
          Your Role in the Organization you are representing:
          <input 
            type="text" 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            className={formData.role ? 'filled' : ''} 
            required 
          />
        </label>

        <fieldset>
          <legend>Service you want:</legend>
          <label>
            <input
              type="radio"
              name="domain"
              value="Web Application Development"
              checked={formData.domain === 'Web Application Development'}
              onChange={handleChange}
            />
            Web Application Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Mobile Application Development"
              checked={formData.domain === 'Mobile Application Development'}
              onChange={handleChange}
            />
            Mobile Application Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Micro Services"
              checked={formData.domain === 'Micro Services'}
              onChange={handleChange}
            />
            Micro Services
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Cloud Services"
              checked={formData.domain === 'Cloud Services'}
              onChange={handleChange}
            />
            Cloud Services
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Machine Learning Applications"
              checked={formData.domain === 'Machine Learning Applications'}
              onChange={handleChange}
            />
            Machine Learning Applications
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Game Development"
              checked={formData.domain === 'Game Development'}
              onChange={handleChange}
            />
            Game Development
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Internet Of Things Application"
              checked={formData.domain === 'Internet Of Things Application'}
              onChange={handleChange}
            />
            Internet Of Things Application
          </label>
          <label>
            <input
              type="radio"
              name="domain"
              value="Other"
              checked={formData.domain === 'Other'}
              onChange={handleChange}
            />
            Other
          </label>
        </fieldset>

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

export default Get_in_touch_form;
