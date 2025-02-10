import React, { useState } from 'react';
import './Hire_with_us_form.css';
import axios from 'axios';

const Hire_with_us_form = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    contact: '',
    domain: '',
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://develet.in:5000/api/hire_with_us', formData);
      setShowModal(true);
      setFormData({
        name: '',
        organization: '',
        email: '',
        contact: '',
        domain: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };


  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
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
      <h2 className="title" style={{ fontSize: '28px' }}>
  
  <span className="dev" style={{ fontSize: '30px' }}>Dev</span>
  <span className="elet" style={{ fontSize: '30px' }}>Elet</span>{' '}
  Hire With Us Programme
</h2>

        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={formData.name ? 'filled' : ''} required />
        </label>
        <label>
        Organization you are representing:
          <input type="text" name="organization" value={formData.organization} onChange={handleChange} className={formData.organization ? 'filled' : ''} required />
        </label>
        <label>
        Email ID:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={formData.email ? 'filled' : ''} required />
        </label>
        <label>
          Contact Number (with postal code):
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} className={formData.contact ? 'filled' : ''} required />
        </label>
        <label>
        Please specify the about the domain you are looking to Hire (eg:- Cloud, Full Stack, etc...)
          <input type="text" name="domain" value={formData.domain} onChange={handleChange} className={formData.domain ? 'filled' : ''} required />
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

export default Hire_with_us_form;
