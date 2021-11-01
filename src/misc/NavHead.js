import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import {Container, Button} from "react-bootstrap";

const NavHead = () => (
  <header className="nav-header">
    <img className="logo-img" alt="logo" src={logo} />
    <h2 className="header-main">Auto Grader</h2>
    <Link to="/" className="logout-corner">
      <Button className="btn-lg logout-button">LOGOUT</Button>
    </Link>
  </header>
);

export default NavHead;
