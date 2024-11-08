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
import Taxi from "../images/taxi.jpg";
import HR2 from "../images/HR.jpg";
import Denver from "../images/denver.webp";
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
    {
      id: "crimesindenver",
      title: "Exploratory Data Analysis of Crimes in Denver (2018 - 2024)",
      description:
        "Welcome to an insightful exploration of the World Happiness dataset spanning from 2015 to 2020. This analysis delves into various dimensions of happiness, generosity, democracy, and more, just before the COVID-19 pandemic reshaped our world. Leveraging the power of data science and the R programming language, this article uncovers fascinating trends and comparisons across continents and countries. ",
      imageUrl: Denver,
      path: "/crimesindenver",
      date: "06/08/2024, 02:49 P.M.",
    },
    {
      id: "taxi",
      title:
        "Comprehensive Data Analysis and Predictive Modeling for Taxi Operations",
      description:
        "In a recent project, I was tasked with analyzing a taxi company's dataset to identify anomalies in its operations and predict future trends based on its current trajectory. The initial step involves exploratory data analysis, followed by data preprocessing and cleaning. Additionally, I will create new variables derived from the existing dataframe.",
      imageUrl: Taxi,
      path: "/taxi",
      date: "06/30/2024, 11:12 P.M.",
    },
     {
      id: "humanresourcesattrition",
      title: "HR Analytics Case Study",
      description:
        "This project analyzes employee attrition at XYZ company, identifying key factors like income, tenure, and managerial relationships. Using machine learning models, high attrition rates were found in specific age groups and departments. Recommendations include leadership training, salary adjustments, and regular promotions to improve job satisfaction and retention.",
      imageUrl: HR2,
      path: "/HRCaseStudy",
      date: "07/04/2024, 5:13 P.M.",
    },
     {
      id: "invistcoairlines",
      title:
        "Enhancing Customer Satisfaction and Loyalty at Invistico Airlines: A Data-Driven Approach",
      description:
        "This case study analyzes Invistico Airlines' customer data to identify key factors affecting satisfaction and loyalty. By implementing targeted improvements based on data-driven insights, the airline can enhance the passenger experience, boost customer retention, and drive profitability.",
      imageUrl:
        "https://i0.wp.com/seleritysas.com/wp-content/uploads/2018/11/bigstock-202377457.jpg?fit=900%2C600&ssl=1",
      path: "/invistcoairlines",
      date: "07/12/2024, 8:38 P.M.",
    },
      {
      id: "sentiment",
      title: "AI- Sentiment Analysis Machine",
      description:
        "This project is an AI-driven Sentiment Analysis Machine that analyzes user input to determine whether the sentiment is positive, negative, or neutral. Developed by Mohamed Gad, it processes text data, visualizes results, and provides insights into sentiment and device usage, all through an intuitive and user-friendly Shiny app interface.",
      imageUrl:
        "https://www.dummies.com/wp-content/uploads/deep-learning-sentiment-analysis.jpg",
      path: "/sentiment",
      date: "08/14/2024, 9:45 P.M.",
    },
        {
      id: "uselections",
      title:
        "AI-Driven Sentiment Analysis and Predictive Modeling of Political Figures Using News Data",
      description:
        "This project utilizes AI-powered sentiment analysis and predictive modeling to examine public sentiment towards political figures such as Donald Trump and Kamala Harris. By analyzing news articles, the app visualizes sentiment trends, forecasts future opinions, and tracks media mentions, offering insights into the evolving landscape of public opinion.",
      imageUrl:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2b40cbcd-7949-4c29-a42d-6e6fb924c7b9.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
      path: "/uselections",
      date: "08/18/2024, 03:50 P.M.",
    },
       {
      id: "hrhiring",
      title: "Transforming HR Decision-Making with AI",
      description:
        "Leveraging AI and machine learning, I've developed an app that predicts candidate suitability for hiring. By analyzing key metrics like experience, education, and interview scores, the app provides real-time, data-driven recommendations, empowering HR teams to make informed decisions quickly and efficiently.",
      imageUrl:
        "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1654569356/1654569355.jpg",
      path: "/hrhiring",
      date: "08/18/2024, 06:38 P.M.",
    },
      {
      id: "worldcup",
      title: "World Cup AI Predictor",
      description:
        "This project leverages AI to simulate and predict outcomes of World Cup matches. Using historical data and machine learning models, the app dynamically generates contests and forecasts the winning teams, offering a compelling demonstration of AI-driven sports analytics and prediction in an interactive Shiny application.",
      imageUrl:
        "https://s.france24.com/media/display/e11d4a80-7ee7-11ec-afeb-005056bf30b7/w:980/p:16x9/3562e9830bb570829823a563b55e17ea7d5df954.jpg",
      path: "/worldcup",
      date: "08/31/2024, 10:34 P.M.",
    },
      {
      id: "AI-Driven Complaint Management Dashboard",
      title: "AI-Driven Complaint Management Dashboard",
      description:
        "This AI-powered webapp provides a comprehensive dashboard for analyzing customer complaints, rerouting them based on department, identifying patterns, and detecting ADA-related issues. Leveraging MongoDB for real-time data retrieval, the app empowers management teams to efficiently resolve issues and enhance overall customer service performance.",
      imageUrl:
        "https://www.caseiq.com/wp-content/uploads/2023/04/iStock-995102590-scaled.jpg",
      path: "/aicomplaint",
      date: "09/05/2024, 10:34 P.M.",
    },
      {
      id: "AI-Powered Smart Policy Search Web App",
      title: "AI-Powered Smart Policy Search Web App",
      description:
        "This AI-powered Smart Policy Search Web App allows users to quickly find company policies by typing keywords. Leveraging fuzzy matching and a question-answering AI model, it dynamically retrieves relevant policies in real-time, presenting them interactively with a typewriter effect. Built with React, Flask, and Python-based AI.",
      imageUrl:
        "https://image.lorman.com/article/blog/56_AdobeStock_106325693.jpeg",
      path: "/aismartsearch",
      date: "09/16/2024, 10:30 P.M.",
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
      <h1 style={{ textAlign: "center" }}>Data Analysis & Machine Learning</h1>
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
