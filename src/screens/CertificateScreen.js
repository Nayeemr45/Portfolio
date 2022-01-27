import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Background from "../component/Background";
import Footer from "../component/Footer";
import image from "../asset/images/nayeem.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const CertificateScreen = () => {
  library.add(faCertificate);

  return (
    <Container fluid style={{ background: "#414760" }}>
      <Background />
      <h2 className="my-3 text-center">Certificates</h2>
      <Row>
        <Col className="py-5">
          <Card
            style={{
              background: "transparent",
              fontFamily: "Titillium Web",
            }}
          >
            <Card.Body>
              <Row>
                <Col xl={4} lg={4} md={2} sm={2}>
                  <Card.Title>AIUB Dean Award</Card.Title>
                </Col>
              </Row>
              <Card.Text className="py-3">For GPA: 3.88/4.00</Card.Text>
              <FontAwesomeIcon
                icon={"certificate"}
                style={{ color: "#dbdbdb", width: "10rem", height: "10rem" }}
              />
              {/* <Card.Img variant="top" src={image} /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default CertificateScreen;
