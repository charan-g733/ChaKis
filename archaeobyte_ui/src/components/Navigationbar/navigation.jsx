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
    <Navbar expand="lg" className="custom-navbar">
      <Container className="custom-container-nav">
        <Navbar.Brand href="/">
          <img
            src="/images/DevElet_logo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Company logo"
          />
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
                <FaChevronDown className="arrow-icon" />
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
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#hire">Hire with Us</Nav.Link>
            <Nav.Link href="#faq">Get in Touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
