import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Headerbar() {
  return (
    <>
      <Navbar className="custom-headbar">
        <Container>
          <Navbar.Brand href="#home" className="hover-underline default-underline text-white custom-brand">Individual Learning</Navbar.Brand>
          <Navbar.Brand href="#home" className="hover-underline text-white custom-brand">Train your Team</Navbar.Brand>
          <Navbar.Brand href="#home" className="hover-underline text-white custom-brand">ArchaeoByte IT Services</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Headerbar;
