import React from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import Background from "../component/Background";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faNode,
  faLaravel,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import flutter from '../asset/icons/flutterio-icon.svg'
import jquery from '../asset/icons/jquery-horizontal.svg'
import mongodb from '../asset/icons/mongodb-ar21.svg'
const AboutScreen = () => {
  library.add(
    faCheckSquare,
    faGithub,
    faHtml5,
    faCss3Alt,
    faJs,
    faPhp,
    faNode,
    faLaravel,
    faReact,
    faBootstrap
  );

  return (
    <Container fluid style={{ background: "#414760" }}>
      <Background />
      <Row
      //    style={{ height: "100vh" }}
      >
        <h2 className="py-3 my-0 text-center">About Me</h2>
        <Col xl={12} lg={12} md={12} sm={12} className="">
          <Card
            style={{
              background: "transparent",
              fontFamily: "Titillium Web",
            }}
          >
            <Card.Body>
              <Row>
                <Col xl={4} lg={4} md={2} sm={2}>
                  <Card.Title>Education</Card.Title>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={10}
                  sm={8}
                  className="d-flex justify-content-end px-4"
                >
                  <Row>
                    <Card.Text>Software Engineering Major</Card.Text>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={4} md={8} sm={12}>
                  <Card.Text>
                    American International University-Bangladesh (AIUB)
                  </Card.Text>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={4}
                  sm={12}
                  className="d-flex justify-content-end px-4"
                >
                  <Row>
                    <Card.Text>Dhaka, Bangladesh</Card.Text>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={4} md={8} sm={8}>
                  <Card.Text>Program : Computer Science</Card.Text>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={4}
                  sm={4}
                  className="d-flex justify-content-end px-4"
                >
                  <Row>
                    <Card.Text>April 2018 – Present</Card.Text>
                  </Row>
                </Col>
              </Row>
              <Card.Text className="py-3">
                Cumulative GPA: 3.88/4.00
                <br />
                Credits completed: 116 (out of 130)
                <br />
                Relevant Coursework: Web Technologies (PHP, HTML, CSS,
                JavaScript, JSON, AJAX, MySQL), Introduction to Database
                (Oracle), Advanced Database Management System(Oracle PL/SQL),
                Introduction to Programming Languages (C & C++), Object Oriented
                Programming I & II (Java & C#), Computer Graphics (OpenGL, C++),
                Algorithm, Object Oriented Analysis & Design, Advanced
                Programming in Web Technology(Node js, Express js, PHP, Laravel,
                HTML, CSS, JavaScript, JSON, AJAX, MySQL),Programming in
                Python(Numpy, Tkinter,TensorFlow, Matplotlib) and about 26+
                more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} className="my-5">
          <Card
            style={{
              background: "transparent",
              fontFamily: "Titillium Web",
            }}
          >
            <Card.Body>
              <Row>
                <Col xl={4} lg={4} md={2} sm={2}>
                  <Card.Title>Skills</Card.Title>
                </Col>
              </Row>
              <Card.Text className="py-3">
                
                <FontAwesomeIcon
                title="HTML5"
                  icon={["fab", "html5"]}
                  className="mx-2"
                  style={{ color: "#e34c26", width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="CSS3"
                  icon={["fab", "css3-alt"]}
                  className="mx-2"
                  style={{ color: "#264de4", width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="JavaScript"
                  icon={["fab", "js"]}
                  className="mx-2"
                  style={{ color: "#f0db4f", width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="React JS"
                  icon={["fab", "react"]}
                  className="mx-2"
                  style={{ color: "#61DBFB", width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="Node"
                  icon={["fab", "node"]}
                  className="mx-2"
                  style={{ color: "#3C873A", width: "2rem", height: "2rem" }}
                />
                <Image
                title="Mongodb"
                  src={mongodb}
                  className="mx-2"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <Image
                title="Flutter"
                  src={flutter}
                  className="mx-2"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="Php"
                  icon={["fab", "php"]}
                  className="mx-2"
                  style={{ color: "#8993be", width: "2rem", height: "2rem" }}
                />
                <Image
                title="Jquery"
                  src={jquery}
                  className="mx-2"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="Laravel"
                  icon={["fab", "laravel"]}
                  className="mx-2"
                  style={{ color: "#fb503b", width: "2rem", height: "2rem" }}
                />
                <FontAwesomeIcon
                title="Bootstrap"
                  icon={["fab", "bootstrap"]}
                  className="mx-2"
                  style={{ color: " #563d7c", width: "2rem", height: "2rem" }}
                />
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default AboutScreen;
