// Navigationbar.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa"; // Import arrow icon
import "./navigation.css";

function Navigationbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <>
      <Navbar className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo final may be.webp"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Company logo"
            />
          </Navbar.Brand>
          <Nav className="division">
            <Nav.Link href="#home">Home</Nav.Link>
            <Dropdown
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
              show={isDropdownVisible}
            >
              <Dropdown.Toggle
                as={Nav.Link}
                href="#programs"
                className="programs-link"
              >
                Programs <FaChevronDown className="arrow-icon" />
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
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
