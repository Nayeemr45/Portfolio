import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Background from "../component/Background";
import Footer from "../component/Footer";

const ContactScreen = () => {
  return (
    <Container fluid style={{ background: "#414760" }}>
      <Background />
      <h2 className="py-3 text-center">Contact Me</h2>
      <Row className="d-flex justify-content-center">
        <Col xl={6} lg={6} md={6} sm={12}>
          <Form className="py-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                style={{
                  background: "transparent",
                  fontFamily: "Titillium Web",
                  border: "1px solid white",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{
                  background: "transparent",
                  fontFamily: "Titillium Web",
                  border: "1px solid white",
                }}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter message"
                style={{
                  background: "transparent",
                  fontFamily: "Titillium Web",
                  border: "1px solid white",
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                background: "transparent",
                fontFamily: "Titillium Web",
                border: "1px solid white",
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ContactScreen;
