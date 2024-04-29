import React from "react";
import One from "../images/happiest.png";
import Two from "../images/generous.png";
import Three from "../images/ML-DT.png";

const SocioPolitcs = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-3">
        Harnessing Data Science for Political Stability Analysis
      </h1>
      <h2>Intro</h2>
      <p>
        In this comprehensive analysis, we delve into the factors contributing
        to societal happiness and generosity. Using advanced data analytics and
        machine learning techniques, we aim to not only identify the happiest
        and most generous societies but also predict potential political unrest
        based on various socio-economic indicators. This article outlines our
        approach, from data preparation to predictive modeling, and discusses
        the implications of our findings.
      </p>

      <h2>Data Preparation and Initial Analysis</h2>
      <p>
        We begin by loading essential R libraries and the "politics.csv"
        dataset, immediately preprocessing to cleanse any incomplete records.
        This step ensures the robustness and reliability of our analysis.
      </p>
      <pre>{`
        library(dplyr)
        library(ggplot2)
        data <- read.csv("politics.csv")
        data <- na.omit(data)
      `}</pre>

      <h2>Exploring Happiness and Generosity</h2>
      <p>
        Our analysis first focuses on identifying the top happiest societies. By
        filtering and ranking countries based on their happiness scores, we
        visualize the top performers, providing insights into what makes these
        societies excel in well-being.
      </p>
      <pre>{`
        top_happiest <- data %>%
          filter(happiness_score >= 7.5550) %>%
          arrange(desc(happiness_score)) %>%
          select(Country, Happiness = happiness_score) %>%
          distinct(Country, .keep_all = TRUE)
      `}</pre>

      {/* Placeholder for Graph 1 */}
      <div className="graph-placeholder mb-4">
        <p className="text-center">
          <img
            src={One}
            alt="happiness"
            style={{ width: "100%", height: "auto" }}
          />
        </p>
      </div>

      <p>
        Similarly, we investigate the most generous societies. Using a
        generosity threshold, we identify and rank countries, visualizing those
        that demonstrate exceptional generosity.
      </p>
      <pre>{`
        top_generous <- data %>%
          filter(generosity >= 0.5000051) %>%
          arrange(desc(generosity)) %>%
          select(Country, Generosity = generosity) %>%
          distinct(Country, .keep_all = TRUE)
      `}</pre>

      {/* Placeholder for Graph 2 */}
      <div className="graph-placeholder mb-4 text-center">
        <img
          src={Two}
          alt="Generosity"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <h2>Data Normalization and Predictive Modeling</h2>
      <p>
        To prepare for advanced analytics, we normalize the data, creating a
        structured dataset ready for machine learning applications. This step
        involves averaging and scaling key metrics across countries to ensure
        comparability.
      </p>
      <pre>{`
      mydata <- data %>%
      group_by(Country) %>%
      summarise(
        Happiness= round(mean(happiness_score)),
        GDP= round(mean(gdp_per_capita), 3),
        Health= round(mean(health),2) * 100,
        Freedom= round(mean(freedom), 3) * 100,
        Gov_Trust= round(mean(government_trust), 3)*100,
        Social_Support= mean(social_support)*100,
        CPI_Score= round(mean(social_support), 2)*100
      )
      `}</pre>

      <p>
        Using this normalized data, we construct a decision tree model to
        explore the pathways to happiness. The model acts as a roadmap,
        suggesting how various factors might influence societal happiness.
      </p>
      <pre>{`
        tmodel <- rpart(Happiness ~ GDP+ Health+Freedom+Gov_Trust+Social_Support+CPI_Score,
            data = mydata,
            control= rpart.control(minsplit = 4,
                                   maxdepth = 4,
                                   cp=0.01))
rpart.plot(tmodel,main = "Decision Tree for Happiness Prediction", extra = 101)
      `}</pre>

      {/* Placeholder for Graph 3 */}
      <div className="graph-placeholder mb-4">
        <p className="text-center">
          <img src={Three} alt="DT" style={{ width: "100%", height: "auto" }} />
        </p>
      </div>

      <h2>Stability Prediction Using Random Forest</h2>
      <p>
        Our final predictive model uses a Random Forest algorithm to assess
        government trust and predict societal stability. This model processes
        multiple socio-economic variables to forecast potential unrest.
      </p>
      <pre>{`
        input_data <- data.frame(
            GDP= 1.1,
            Health= 3,
            Freedom= 4,
            Gov_Trust= 3 ,
            Social_Support= 23,
            CPI_Score= 50
          )
          
          rmodel <- randomForest(Happiness ~ GDP+ Health+Freedom+Gov_Trust+Social_Support+CPI_Score,
                                 data = mydata,
                                 ntree=132)
      `}</pre>
      <p>
        To interpret the model's predictions, we implement a custom function
        that categorizes societies into stable, moderate, or unrest-prone based
        on the predicted stability score.
      </p>
      <pre>{`
            input_data2 <- data.frame(
              Happiness= 3,
              GDP= 0.1,
              Health= 25,
              Freedom= 30,
              Social_Support= 5,
              CPI_Score= 90
            )
        
        rmodel2 <- randomForest(Gov_Trust ~ GDP+ Health+Freedom+Happiness+Social_Support+CPI_Score,
                                data = mydata,
                                ntree=132)
        rprediction2 <- predict(rmodel2, input_data2)
        print(rprediction2)
        
        
        #stability function
        unrest_prediction <- function(rmodel2, input_data2){
            if (rprediction2 > 25){
            cat('This Society is Stable, with a stabilty score of: ',rprediction2 )
            } else if (rprediction2 > 10){
            cat('This Society is moderate, with a stabilty score of: ',rprediction2 )
            } else if (rprediction2 <= 10){
            cat('This Society is expected to suffer from unrest, with a stabilty score of: ',rprediction2 )
            
            }
        }
        
        unrest_prediction(rprediction2, input_data2)
      `}</pre>
      <p>
        The output from our model, "This Society is moderate, with a stabilty
        score of: 13.94316", indicates a moderate trust and societal stability,
        showcasing the utility of our predictive approach.
      </p>
      <h2>Conclusion</h2>
      <p>
        In our extensive data-driven exploration of societal well-being, three
        graphs have been paramount in illustrating the outcomes of our analysis.
        <br />
        In our pursuit to quantify joy, the first graph presents the happiest
        societies. Nations such as Finland and Denmark top the chart, offering a
        glimpse into the environments where contentment thrives. The high
        happiness scores underscore the successful harmonization of economic,
        social, and governmental factors that contribute to overall well-being.
        <br />
        The second graph captures the essence of generosity across nations.
        Countries like Myanmar and Indonesia stand out, with generosity scores
        that are notably higher than others. This visual testament to altruism
        serves as a compelling narrative about the cultures and social norms
        that cultivate generous spirits within these communities.
        <br />
        Finally, the decision tree for happiness prediction elucidates the
        complex interplay of variables that forecast happiness. The tree
        branches into logical pathways, with social support, health, and trust
        in governance being crucial nodes that lead to varying levels of
        happiness. This model acts as both a diagnostic tool and a strategic
        guide for policy-makers aiming to replicate the success stories of the
        happiest nations.
        <br /> Together, these visual aids distill vast amounts of data into
        actionable insights, depicting a world where generosity and happiness
        are measurable, understandable, and, most importantly, attainable with
        the right societal constructs. The analyses provide not just a snapshot
        of the current state of societies but also a roadmap for building a
        brighter, more content world. Through this detailed analysis, we
        demonstrate how data science can be strategically applied to better
        understand and enhance societal conditions, providing valuable insights
        for policymakers worldwide.
      </p>
    </div>
  );
};

export default SocioPolitcs;
