import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa";
import "./navigation.css";

function Navigationbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${isDropdownVisible ? "dropdown-open" : ""}`}
    >
      <Container className="custom-container-nav">
        <Navbar.Brand href="/" className="navbar-brand-container">
          <img
            src="/images/DevElet_logo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Company logo"
          />
          <span className="brand-text">
            <span className="brand-dev">Dev</span>
            <span className="brand-elet">Elet.</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Dropdown
              show={isDropdownVisible}
              onToggle={toggleDropdown}
              ref={dropdownRef}
            >
              <Dropdown.Toggle
                as={Nav.Link}
                href="#programs"
                className="programs-link"
              >
                Programs
                <FaChevronDown className="arrow-icon" style={{ color: "black" }} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown">
                <Dropdown.Item href="/AEA">
                  <img
                    src="images/Aea.png"
                    alt="AEA"
                    style={{
                      height: "2.7em",
                      width: "6em",
                      verticalAlign: "middle",
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="/Innovate">
                  <img
                    src="images/Innovate.png"
                    alt="Innovate"
                    style={{
                      height: "2.7em",
                      width: "6em",
                      verticalAlign: "middle",
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#customer-reviews">Reviews</Nav.Link>
            <Nav.Link
              href="https://forms.gle/48TEisj4vGCMkPng9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire with Us
            </Nav.Link>
            <Nav.Link
              href="https://forms.gle/KWVFjp5syUQ2mfYw9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
