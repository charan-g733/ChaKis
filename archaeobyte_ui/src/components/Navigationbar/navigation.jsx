import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css';

function Navigationbar() {
  return (
    <>
      <Navbar className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo final may be.webp"
              width="80"  // Increased size
              height="80" // Increased size
              className="d-inline-block align-top"
              alt="Company logo"
            />
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#programs">Programs</Nav.Link>
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
