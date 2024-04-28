import React from "react";
import Sales from "../images/sales.jpg";
import SOC from "../images/soc.jpg";
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
        <br />
        <Col md={6} lg={4}>
          <Link to={`/politicsone`} className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={SOC} alt="Home sales insights" />
              <Card.Body>
                <Card.Title className="text-dark">
                  Detailed Report on Home Sales Trends
                </Card.Title>
                <Card.Text>
                  Explore the latest trends in the real estate market with our
                  comprehensive analysis of home sales. This report covers
                  factors like market prices, geographical demand, and economic
                  indicators that impact buying and selling decisions in the
                  housing market.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <p>04/28/2024, 9:45 A.M.</p>
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
