import React from "react";
import "./footer.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-contact">
          <img
            src="/images/DevElet_with_name.png"
            alt="NxtWave Logo"
            className="footer-logo"
          />
          <h4>Reach Us</h4>
          <p>
            <FaWhatsapp className="icon" /> +919346116602
          </p>
          <p>
            <FaEnvelope className="icon" /> tech.develet@gmail.com
          </p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Academy</li>
            <li>Intensive</li>
            <li>Hire with us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Community</li>
            <li>4.0 Champions</li>
            <li>NxtWave'22 Review</li>
            <li>Python Tutorial</li>
          </ul>
        </div>
        <div className="social-media">
          <FaFacebook className="icon fa-facebook" />
          <FaInstagram className="icon fa-instagram" />
          <FaXTwitter className="icon fa-x-twitter" />
          <FaLinkedin className="icon fa-linkedin" />
          <FaYoutube className="icon fa-youtube" />
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>Privacy Policy</li>
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
