import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import {
  RouteExperienceWork,
  RouteHome,
  RoutePortfolio,
} from "../../routes/my-route";

type Param = {
  children?: React.ReactNode;
  namaSaya?: string;
};

const CustomNavbar = (props: Param) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`bg-apps px-5`}
        fixed="top"
      >
        <Link href={RouteHome}>
          <a className="navbar-brand text-apps fw-bold">
            <u>Zeffry Reynando</u>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href={RoutePortfolio}>
              <a className="text-apps nav-link">Portfolio</a>
            </Link>
            <Link href={RouteExperienceWork}>
              <a className="text-apps nav-link">Work Experience</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
