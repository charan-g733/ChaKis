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
    <>
      <Navbar className="custom-navbar">
        <Container className="custom-container-nav">
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
                  <Dropdown.Item href="#option1">
                    {" "}
                    <img
                      src="images/Aea.png"
                      alt="AEA"
                      style={{
                        height: "2.5em",
                        width: "6em",
                        verticalAlign: "middle",
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#option2">
                    <img
                      src="images/Innovate.png"
                      alt="Innovate.png"
                      style={{
                        height: "2.5em",
                        width: "6em",
                        verticalAlign: "middle",
                      }}
                    />
                  </Dropdown.Item>
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
