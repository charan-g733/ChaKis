import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";

function Header() {
  return (
    <>
      <Navbar className="custom-headbar">
        <Container>
          <Navbar.Brand
            href="/"
            className="hover-underline  text-white custom-brand"
            activeClassName="default-underline"
          >
            Individual Learning
          </Navbar.Brand>
          <Navbar.Brand
            href="/team"
            className="hover-underline text-white custom-brand"
            activeClassName="default-underline"
          >
            Train your Team
          </Navbar.Brand>
          <Navbar.Brand
            href="/business"
            className="hover-underline text-white custom-brand"
            activeClassName="default-underline"
          >
            ArchaeoByte IT Services
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
