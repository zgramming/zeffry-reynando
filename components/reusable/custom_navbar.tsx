import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

type Param = {
  children?: React.ReactNode;
  namaSaya?: string;
};

const CustomNavbar = (props: Param) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`bg-apps px-5`}>
        <Navbar.Brand href="#home" className="text-apps fw-bold">
          <u>Zeffry Reynando</u>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className="text-apps">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-apps">
              Work Exp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
