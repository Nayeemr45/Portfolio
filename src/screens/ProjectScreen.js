import React from "react";
import Projects from "../component/Projects";
import { Col, Container, Row } from "react-bootstrap";
import Background from "../component/Background";
import Footer from "../component/Footer";

const ProjectScreen = () => {
  return (
    <Container fluid style={{ background: "#414760" }}>
      <Background />
      <h2 className="py-3 text-center">Projects</h2>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"Weather App"}
            lan={"Flutter , OpenWeather Api"}
            details={
              "In this App User can see the temperature and many more Weather information like (Sunrize, Sunset, Atmosphere, Humidity.. etc) by selecting City."
            }
            link={"https://github.com/Nayeemr45/Flutter-Weather-App"}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"E-Health Care"}
            lan={"HTML, CSS, JS, jQuery, Laravel , Nodejs, Express js , MySQL"}
            details={
              "As a part of the mid project submission I have been creating a E-Health Care system with three types of user where users can login as a patient, doctor and admin.Patient can book Appointment and Doctor can show those patient and many more."
            }
            link={"https://github.com/Nayeemr45/E-Healthcare-Final"}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"Print Management Solution"}
            lan={"HTML, CSS, JS, jQuery, PHP, MySQL"}
            details={
              "As a part of the final project submission I have been creating a Print Management Solution system with three types of user where users can print their document from anywhere."
            }
            link={"https://github.com/Nayeemr45/Web_tech"}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"Furniture Rent Management System"}
            lan={"Java, MySQL"}
            details={
              "This system is based on Java and MySQL. Here user can Rent a Furniture  and then return them after certain time of use."
            }
            link={"https://github.com/Nayeemr45/Project1"}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"Hospital Management System"}
            lan={"C#, MS SQL"}
            details={
              "In this system there are three types of user where users can login as a patient, doctor and admin.Patient can book Appointment and Doctor can show those patient and admin manage the whole system. The project is written in C# and Microsoft SQL Server is used for Database."
            }
            link={"https://github.com/Nayeemr45/Hospital"}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"Cricket Management System"}
            lan={"JAVA, Oracle DB"}
            details={
              "Using this system a player can Register for a club and show the schedule of the matches. Here Admin can manage the system."
            }
            link={"https://github.com/Nayeemr45/Cricket-Management-System"}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} className="my-2">
          <Projects
            title={"OpenGL based Airplane Simulation"}
            lan={"OpenGL, C++"}
            details={
              "I have been developed a Airplane Simulation type Simulation where Airplane can takeoff and go around and then land into the runway."
            }
            link={"https://github.com/Nayeemr45/Airplane-Simulation"}
          />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ProjectScreen;
