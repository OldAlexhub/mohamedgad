import React from "react";
import Sales from "../images/sales.jpg";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Articles = () => {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Col md={6} lg={4}>
          <Link to={`/carsales`} className="text-decoration-none">
            <Card>
              <Card.Img
                variant="top"
                src={Sales}
                alt="Sales prediction insights"
              />
              <Card.Body>
                <Card.Title className="text-dark">
                  Comprehensive Analysis of Car Sales Data
                </Card.Title>

                <Card.Text>
                  This analysis aims to determine the optimal car price based on
                  variables such as annual salary, credit card debt, and net
                  worth. It explores whether net worth is a valuable indicator
                  for assessing a suitable vehicle for an individual.
                  Additionally, the study considers gender differences to see if
                  they influence car purchasing decisions.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <p>04/27/2024, 10:12 P.M.</p>
                </small>
              </Card.Footer>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
