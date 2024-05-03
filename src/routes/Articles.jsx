import React from "react";
import Sales from "../images/sales.jpg";
import SOC from "../images/soc.jpg";
import Reten from "../images/reten.png";
import Dash from "../images/dash.png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Articles = () => {
  return (
    <Container className="mt-4">
      <h1 style={{ textAlign: "center" }}>Articles</h1>
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
                  Harnessing Data Science for Political Stability Analysis
                </Card.Title>
                <Card.Text>
                  Discover the heart of happiness and generosity across the
                  globe with our cutting-edge analysis. Dive into a visual
                  journey through the world's most contented societies, uncover
                  the most magnanimous cultures, and decode the blueprint to a
                  happier society with our illuminating data-driven study. These
                  insights are more than mere statistics; they're a narrative of
                  human joy and kindness, rendered in vivid detail. Join us as
                  we reveal the secrets behind the world’s smiles and share the
                  wisdom for crafting a more harmonious future.
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
        <br />
        <Col md={6} lg={4}>
          <Link to={`/humanresource`} className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={Reten} alt="Home sales insights" />
              <Card.Body>
                <Card.Title className="text-dark">
                  Human Resources Dataset Analysis{" "}
                </Card.Title>
                <Card.Text>
                  The article is structured to first give a thorough overview of
                  the company's operational and cultural framework by analyzing
                  its manpower. Subsequent sections employ various analytical
                  methodologies such as linear regression, logistic regression,
                  decision trees, and random forest models to investigate and
                  predict retention rates. Each model's effectiveness is
                  evaluated, and observations are meticulously noted.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <p>04/29/2024, 7:45 A.M.</p>
                </small>
              </Card.Footer>
            </Card>
          </Link>
        </Col>
        <br />
        <Col md={6} lg={4}>
          <Link to={`/interactive`} className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={Dash} alt="Home sales insights" />
              <Card.Body>
                <Card.Title className="text-dark">
                  SuperStore Sales Dashboard{" "}
                </Card.Title>
                <Card.Text>
                  This dashboard is not only a tool for viewing sales data but
                  also a platform to demonstrate the ability to transform raw
                  data into meaningful insights through interactive
                  visualizations. Whether you're a stakeholder looking to
                  understand sales trends or a fellow data enthusiast curious
                  about data visualization techniques, this dashboard serves a
                  wide range of purposes.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <p>05/02/2024, 7:45 P.M.</p>
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
