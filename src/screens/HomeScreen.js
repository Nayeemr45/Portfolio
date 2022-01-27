import React from "react";
import Home from "../component/Home";
import Footer from "../component/Footer";
import { Container, Row } from "react-bootstrap";

function HomeScreen() {
  return (
    <Container fluid style={{ background: "#414760"}}>
      <Home />
      <Footer />
    </Container>
  );
}

export default HomeScreen;
