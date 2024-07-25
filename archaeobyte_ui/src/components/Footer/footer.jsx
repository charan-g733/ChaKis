import React from "react";
import "./footer.css";

// Import icons from react-icons
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <img
            src="/images/logo final may be.webp"
            alt="NxtWave Logo"
            className="footer-logo"
          />
          <h4>Reach Us</h4>
          <p>
            <FaWhatsapp className="icon" /> +919390111761 (WhatsApp only)
          </p>
          <p>
            <FaEnvelope className="icon" /> support@nxtwave.tech
          </p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>AEA</li>
            <li>Innovate</li>
            <li>Hire with us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Community</li>
          </ul>
        </div>
          <div className="social-media">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <FaYoutube className="icon" />
          </div>
        <div className="footer-section payment-methods">
          <p>
            NxtWave, WeWork Rajapushpa Summit, Nanakramguda Rd, Financial
            District, Manikonda Jagir, Telangana 500032
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms and Conditions</li>
          <li>Grievance Redressal</li>
          <li>Corporate Information</li>
          <li>Vision and Values</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
