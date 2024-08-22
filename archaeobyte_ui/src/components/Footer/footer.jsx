import React from "react";
import { Link } from "react-router-dom";
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
//footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-contact">
          <img
            src="/images/DevElet_with_name.png"
            alt="DevElet Logo"
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
          <h4 className="footer-h4">Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aea">AEA</Link>
            </li>
            <li>
              <Link to="/innovate">Innovate</Link>
            </li>
            <li>
              <Link to="/hire-with-us">Hire with us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/get_in_touch">IT Services Form</Link>
            </li>
            <li>
              <Link to="/business">IT Services We Offer</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/ourteam"><b>Team DevElet</b></Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
        <FaLinkedin className="icon fa-linkedin" />
          <FaFacebook className="icon fa-facebook" />
          <FaInstagram className="icon fa-instagram" />
          <FaXTwitter className="icon fa-x-twitter" />
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
