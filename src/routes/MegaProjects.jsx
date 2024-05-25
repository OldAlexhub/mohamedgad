import React from "react";
import Taxi from "../images/Taxis.jpg";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MegaProjects = () => {
  const articles = [
    {
      id: "carsales",
      title: "Full Taxi Management Software",
      description:
        "This taxi management software aims to streamline operations by leveraging the MERN stack and React Native. It efficiently handles driver assignments, real-time tracking, and fare calculations. The system integrates MongoDB for robust data management, Express and Node.js for backend services, and React for an intuitive front-end interface. React Native ensures a seamless mobile experience for both drivers and passengers. Key features include ride scheduling, route optimization, payment processing, and detailed reporting. The software enhances operational efficiency and improves customer satisfaction by providing a comprehensive solution for taxi management needs",
      imageUrl: Taxi,
      path: "/taxi",
      date: "05/25/2024, 10:12 P.M.",
    },
  ];

  return (
    <Container className="mt-4">
      <Helmet>
        <title>Mega Projects</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={articles[0].imageUrl} />
        <meta property="og:title" content={articles[0].title} />
        <meta property="og:description" content={articles[0].description} />
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Mega Projects</h1>
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

export default MegaProjects;
