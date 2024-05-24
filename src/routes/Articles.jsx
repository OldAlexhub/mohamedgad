import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import dashboard from "../images/dashboard.png";
import Sales from "../images/sales.jpg";
import SOC from "../images/soc.jpg";
import Reten from "../images/reten.png";
import Dash from "../images/dash.png";
import EV from "../images/evs.png";
import HR from "../images/hr.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Articles = () => {
  const articles = [
    {
      id: "carsales",
      title: "Comprehensive Analysis of Car Sales Data",
      description:
        "This analysis aims to determine the optimal car price based on variables such as annual salary, credit card debt, and net worth. It explores whether net worth is a valuable indicator for assessing a suitable vehicle for an individual.",
      imageUrl: Sales,
      path: "/carsales",
      date: "04/27/2024, 10:12 P.M.",
    },
    {
      id: "politicsone",
      title: "Harnessing Data Science for Political Stability Analysis",
      description:
        "Discover the heart of happiness and generosity across the globe with our cutting-edge analysis. Dive into a visual journey through the world's most contented societies, uncover the most magnanimous cultures, and decode the blueprint to a happier society.",
      imageUrl: SOC,
      path: "/politicsone",
      date: "04/28/2024, 9:45 A.M.",
    },
    {
      id: "humanresource",
      title: "Human Resources Dataset Analysis",
      description:
        "The article is structured to first give a thorough overview of the company's operational and cultural framework by analyzing its manpower. Subsequent sections employ various analytical methodologies to investigate and predict retention rates.",
      imageUrl: Reten,
      path: "/humanresource",
      date: "04/29/2024, 7:45 A.M.",
    },
    {
      id: "interactive",
      title: "SuperStore Sales Dashboard",
      description:
        "This dashboard is a tool for viewing sales data and demonstrating the ability to transform raw data into meaningful insights through interactive visualizations.",
      imageUrl: Dash,
      path: "/interactive",
      date: "05/02/2024, 7:45 P.M.",
    },
    {
      id: "hrinteractive",
      title: "HR Dashboard Visualization",
      description:
        "This dashboard integrates interactive visualizations and a decision tree machine learning model to transform raw data into actionable insights, designed to cater to a wide audience.",
      imageUrl: HR,
      path: "/hrinteractive",
      date: "05/03/2024, 9:40 P.M.",
    },
    {
      id: "evsales",
      title: "EV Sales in Washington State",
      description:
        "This dashboard explores electric vehicle sales in Washington State, providing interactive visualizations to analyze sales trends, compare top sellers, and generate actionable insights for policymakers, businesses, and consumers alike.",
      imageUrl: EV,
      path: "/evsales",
      date: "05/06/2024, 10:33 P.M.",
    },
    {
      id: "politicstwo",
      title:
        "Unveiling Global Happiness: A Deep Dive into World Happiness Data (2015-2020)",
      description:
        "Welcome to an insightful exploration of the World Happiness dataset spanning from 2015 to 2020. This analysis delves into various dimensions of happiness, generosity, democracy, and more, just before the COVID-19 pandemic reshaped our world. Leveraging the power of data science and the R programming language, this article uncovers fascinating trends and comparisons across continents and countries. ",
      imageUrl: dashboard,
      path: "/politicstwo",
      date: "05/19/2024, 09:07 P.M.",
    },
  ];

  return (
    <Container className="mt-4">
      <Helmet>
        <title>Data Analysis & Machine Learning</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={articles[0].imageUrl} />
        <meta property="og:title" content={articles[0].title} />
        <meta property="og:description" content={articles[0].description} />
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Articles</h1>
      <Row className="g-4">
        {articles.map((article) => (
          <Col key={article.id} md={6} lg={4}>
            <Link to={article.path} className="text-decoration-none">
              <Card>
                <Card.Img
                  variant="top"
                  src={article.imageUrl}
                  alt={article.title + " insights"}
                />
                <Card.Body>
                  <Card.Title className="text-dark">{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <p>{article.date}</p>
                  </small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Articles;
