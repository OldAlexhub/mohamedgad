import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import KMEAN from "../images/ML-K-MEAN.png";
import LR from "../images/ML-LR.png";
import ML from "../images/ML-TREE.png";

const CarSales = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="mt-5 mb-4">
            Comprehensive Analysis of Car Sales Data
          </h1>

          <section>
            <h2>Introduction</h2>
            <p>
              This analysis explores a dataset of car sales, focusing on how
              demographic and financial factors affect car purchase prices. We
              employ various statistical techniques to derive insights from the
              data.
            </p>
          </section>

          <section>
            <h2>Data Preparation and Initial Insights</h2>
            <p>
              Data preprocessing and initial explorations are crucial for
              setting the stage for more complex analyses.
            </p>
            <Card body className="bg-light">
              <pre>{`
# Import necessary libraries
library(stats)
library(rpart)
library(rpart.plot)
library(randomForest)
library(e1071)
library(ggplot2)
library(dplyr)
library(plotly)

# Load the data
data <- read.csv("carsales.csv")

# Check distinct countries
countries <- data %>%
  distinct(country)

# Analyze sales per country
sales_per_country <- data %>%
  group_by(country) %>%
  select(customer.name) %>%
  count()
              `}</pre>
            </Card>
          </section>

          <section>
            <h2>Detailed Analysis with Statistical Models</h2>
            <p>
              We apply several models to understand the relationships within the
              data.
            </p>

            {/* Linear Regression Analysis */}
            <Card body className="bg-light">
              <pre>{`
# Linear regression models
lmodel_age <- lm(price ~ age, data = mydata)
p1_age <- ggplot(data = mydata, aes(x = age, y = price)) +
  geom_point(color = 'red') + geom_smooth(method = "lm", se = TRUE, color = 'blue') +
  ggtitle("Age Vs. Price - Linear Regression")

lmodel_salary <- lm(price ~ annual_salary, data = mydata)
p2_salary <- ggplot(data = mydata, aes(x = annual_salary, y = price)) +
  geom_point(color = 'red') + geom_smooth(method = "lm", se = TRUE, color = 'blue') +
  ggtitle("Annual Salary Vs. Price - Linear Regression")

lmodel_networth <- lm(price ~ net_worth, data = mydata)
p3_networth <- ggplot(data = mydata, aes(x = net_worth, y = price)) +
  geom_point(color = 'red') + geom_smooth(method = "lm", se = TRUE, color = 'blue') +
  ggtitle("Net Worth Vs. Price - Linear Regression")
              `}</pre>
            </Card>

            {/* Decision Tree Analysis */}
            <Card body className="bg-light">
              <pre>{`
# Decision Tree Model
tmodel <- rpart(price ~ age + gender + annual_salary + cc_debt + net_worth,
  data = mydata, method = "anova", control = rpart.control(minsplit = 4, maxdepth = 3, cp = 0.001))
rpart.plot(tmodel, extra = 101)
              `}</pre>
            </Card>

            {/* K-Means Clustering */}
            <Card body className="bg-light">
              <pre>{`
# K-Means Clustering
set.seed(500)
kmodel <- kmeans(mydata[, c("age", "price")], centers = 5)
ggplot(mydata, aes(x = age, y = price, color = as.factor(kmodel$cluster))) +
  geom_point() + labs(title = "K-Means Clustering of Age vs. Price", color = "Cluster") +
  theme_minimal()
              `}</pre>
            </Card>

            {/* Random Forest Model */}
            <Card body className="bg-light">
              <pre>{`
# Random Forest Model
rmodel <- randomForest(price ~ age + gender + annual_salary + cc_debt + net_worth, data = mydata, ntree = 500)
print(rmodel)

# Test prediction
testdata <- mydata %>%
  summarise(age = 23, gender = 1, annual_salary = 45000, cc_debt = 2500, net_worth = 10000)
predictions <- predict(rmodel, testdata)
cat('Car price should be purchased is: $', predictions)
              `}</pre>
            </Card>
          </section>

          <section>
            <h2>Insights from Data Visualization</h2>
            <p>
              Visual analysis reveals distinct patterns and relationships within
              the dataset.
            </p>

            {/* K-Means Clustering */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>K-means Clustering of Age vs. Price</Card.Title>
                <p>
                  The K-means clustering graph indicates a distribution of car
                  prices across different age groups, segmented into 5 distinct
                  clusters. This segmentation helps to identify patterns and
                  potential groupings within the dataset based on age and car
                  price, which could be particularly useful for targeted
                  marketing strategies.
                </p>
                {/* Placeholder for K-means Clustering graph */}
                <Image src={KMEAN} fluid />
              </Card.Body>
            </Card>

            {/* Linear Regression */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Age Vs. Price - Linear Regression</Card.Title>
                <p>
                  The linear regression graph displays a positive correlation
                  between age and car price, suggesting that as the customer's
                  age increases, so does the likelihood of purchasing more
                  expensive vehicles. This correlation could be indicative of
                  increased purchasing power or a shift in preferences towards
                  higher-end cars with age.
                </p>
                {/* Placeholder for Linear Regression graph */}
                <Image src={LR} fluid />
              </Card.Body>
            </Card>

            {/* Decision Tree Analysis */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Decision Tree - Car Price Predictions</Card.Title>
                <p>
                  The decision tree graph provides a clear, step-by-step
                  breakdown of how different factors such as age, annual salary,
                  and net worth contribute to the predicted car purchase price.
                  Each node offers a decision point that further refines the
                  price estimation, making the model's reasoning transparent and
                  understandable.
                </p>
                {/* Placeholder for Decision Tree graph */}
                <Image src={ML} fluid />
              </Card.Body>
            </Card>

            {/* Random Forest Prediction Result */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Random Forest Model Prediction</Card.Title>
                <p>
                  Utilizing the Random Forest model, a prediction was made for a
                  potential car price based on the test data: a 23-year-old
                  individual with a gender value of 1, an annual salary of
                  $45,000, a credit card debt of $2,500, and a net worth of
                  $10,000. The model predicted the car purchase price for this
                  individual to be $27,813.76. This prediction exemplifies the
                  model's capability to use multiple variables to estimate
                  outcomes effectively.
                </p>
              </Card.Body>
            </Card>
          </section>
          <section>
            <h2>Conclusion</h2>
            <p>
              The analyses provide insights into the significant impact of
              demographic and financial factors on car purchase prices. These
              models offer robust tools for predicting car prices based on key
              variables.
            </p>
          </section>
          <section>
            <h2>Further Research</h2>
            <p>
              To deepen our understanding, further research could explore
              additional factors such as marketing strategies or customer
              service ratings and their effects on sales.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CarSales;
