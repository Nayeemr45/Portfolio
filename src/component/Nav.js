import React from "react";
import "../asset/css/Nav.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container fluid className="nav-container">
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mr-auto">
                  <Nav.Link href="/">
                    <Link
                      to={`/`}
                      style={{ textDecoration: "none", color: "#dbdbdb" }}
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="/projects">
                    <Link
                      to={`/projects`}
                      style={{ textDecoration: "none", color: "#dbdbdb" }}
                    >
                      Projects
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="/certificate">
                    <Link
                      to={`/certificate`}
                      style={{ textDecoration: "none", color: "#dbdbdb" }}
                    >
                      Certificate
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="/about">
                    <Link
                      to={`/about`}
                      style={{ textDecoration: "none", color: "#dbdbdb" }}
                    >
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="/contact">
                    <Link
                      to={`/contact`}
                      style={{ textDecoration: "none", color: "#dbdbdb" }}
                    >
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
    // <div className="Nav">
    //     <div className="Nav-logo">

    //     </div>
    //     <div className="Nav-links">
    //         <ul>
    //             <li><Link to={`/`}>Home</Link></li>
    //             <li><Link to={`/projects`}>Projects</Link></li>
    //             <li><Link to={`/certificates`}>Certificate</Link></li>
    //             <li><Link to={`/about`}>About</Link></li>
    //             <li><Link to={`/contact`}>Contact</Link></li>
    //         </ul>
    //     </div>

    // </div>
  );
};

export default Navigation;
