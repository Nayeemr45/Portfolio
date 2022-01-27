import React from "react";
import "../asset/css/projects.css";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

function Projects({ title, lan, details, link }) {
  library.add(faCheckSquare, faCoffee, faGithub);
  return (
    <Card
      style={{
        background: "transparent",
        fontFamily: "Titillium Web",
      }}
    >
      <Card.Body>
        <Row>
          <Col xl={4} lg={4} md={2} sm={12}>
            <Card.Title>{title}</Card.Title>
          </Col>
          <Col
            xl={8}
            lg={8}
            md={10}
            sm={12}
            className="d-flex justify-content-end px-4"
          >
            <Row>
              <Card.Text>{lan}</Card.Text>
            </Row>
          </Col>
        </Row>
        <Card.Text className="py-3">{details}</Card.Text>
        <a href={link} target="_blank">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{ color: "black", width: "1.5rem", height: "1.5rem" }}
          />
        </a>
      </Card.Body>
    </Card>
  );
}

export default Projects;
