import React from "react";
import "./AppBar.scss";
import Navbar from "react-bootstrap/Navbar";

const AppBar = ({ title }) => {
  return (
    <Navbar className="app-bar" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default AppBar;
