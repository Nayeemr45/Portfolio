import React from "react";
import image from "../asset/images/nayeem2.jpg";
import "../asset/css/home.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Background from "./Background";

function Home() {
  return (
    <Row 
    style={{ height: "100vh" }} 
    className="d-block">
      <Row className="mx-0">
        <Col>
          <Background />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          className="d-flex justify-content-center py-4"
        >
          <Image
            src={image}
            roundedCircle
            style={{ height: "8rem", width: "8rem" }}
          />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col className="header">
          <p>Welcome to my Website.</p>
          <p> I’m a web developer with an Computer Science background..</p>
        </Col>
      </Row>
    </Row>
    // <div className="">
    //     <div className="half-circle-01"></div>
    //     <div className="half-circle-02"></div>
    //     <div className="half-circle-03"></div>
    //     <div className="half-circle-04"></div>
    //     <div className="half">
    //     </div>
    //     <div className="image-body">
    //             <div className="image">
    //                 <img src={image} className="img" alt='nayeem'/>
    //             </div>
    //    </div>
    //     <h1 className="badge"> NAYEEM AHMED</h1>
    //     <h3>FULL-STACK WEB DEVELOPER</h3>
    //     <div className="header">
    //         <p>Welcome to my Website.</p>
    //         <p> I’m a web developer with an Computer Science background..</p>
    //     </div>
    // </div>
  );
}

export default Home;
