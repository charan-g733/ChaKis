import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa"; // Import arrow icon


import "./navigation.css";

function Navigationbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <Navbar className="custom-navbar">
        <Container className="custom-container">
          <div>
            <Navbar.Brand href="#home">
              <img
                src="/images/logo final may be.webp"
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="Company logo"
              />
            </Navbar.Brand>
          </div>
          <div>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Dropdown show={isDropdownVisible} onClick={toggleDropdown}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  href="#programs"
                  className="programs-link"
                >
                  Programs
                  <FaChevronDown className="arrow-icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown">
                  <Dropdown.Item href="#option1">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#option2">Option 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#hire">Hire with Us</Nav.Link>
              <Nav.Link href="#faq">FAQ’s</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
