import React from "react";
import Me from "../images/ME.JPG";
import Skills from "../components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Data from "../components/JobData";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 style={{ textAlign: "center" }}>About Me</h1>
          <div className="text-center">
            <Image src={Me} alt="me" className="rounded" fluid />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Professional Summary</h2>
          <p>
            Executive-level Business Manager and entrepreneur with experience
            running start-ups and emerging companies. Strong technology and
            product development expertise. Build strategic business
            relationships and partnerships. Strong drive with excellent
            interpersonal, communication, and team-building skills.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Awards</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Central Florida Community College's David Langiston Excellence
              Award for Exceptional Performance in the Classroom and in the
              Community.
            </ListGroup.Item>
            <ListGroup.Item>
              Certificate of Appreciation for serving on the 2019 Denver
              International Airport Transportation Advisory Board.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Skills</h2>
          <ListGroup>
            {Skills.map((skill) => (
              <ListGroup.Item key={skill.id}>
                <FontAwesomeIcon icon={skill.icon} /> {skill.skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Work History</h2>
          {Data.map((dat) => (
            <div key={dat._id} className="mt-3">
              <h3>{dat.position}</h3>
              <p>
                <strong>{dat.company}</strong>
                <br />
                <strong>{dat.location}</strong>
                <br />
                <strong>{dat.dates}</strong>
              </p>
              <ul>
                {dat.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Education</h2>
          <ul>
            <li>Metropolitan State University of Denver</li>
            <ul>
              <li>
                <strong>Bachelor of Arts: </strong>Political Science
              </li>
              <li>
                <strong>Minor: </strong>Sociology
              </li>
            </ul>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
