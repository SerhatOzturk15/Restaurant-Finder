import React from "react";
import Navbar from "react-bootstrap/Navbar";

const AppBar = ({title}) => {
  return (
    <Navbar bg="dark" variant="dark"  fixed="top">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default AppBar;
