import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./header.css";

function Header() {
  return (
    <Navbar className="custom-headbar">
      <Container>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "hover-underline text-white custom-brand default-underline"
              : "hover-underline text-white custom-brand"
          }
        >
          Individual Learning
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive
              ? "hover-underline text-white custom-brand default-underline"
              : "hover-underline text-white custom-brand"
          }
        >
          Train your Team
        </NavLink>
        <NavLink
          to="/business"
          className={({ isActive }) =>
            isActive
              ? "hover-underline text-white custom-brand default-underline"
              : "hover-underline text-white custom-brand"
          }
        >
          DevElet IT Services
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;


