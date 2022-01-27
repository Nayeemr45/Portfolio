import React from "react";
import { Row, Col } from "react-bootstrap";
import "../asset/css/footer.css";

function Footer() {
  return (
    <Row>
      <Col className="footer d-flex justify-content-center align-items-center">
        <p>
          &#169; 2021 All Rights Reserved By{" "}
          <a href="https://www.nayeem-ahmed.com">Nayeem</a>
        </p>
      </Col>
    </Row>
  );
}

export default Footer;
