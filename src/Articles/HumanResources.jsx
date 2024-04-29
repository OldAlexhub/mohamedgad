import React from "react";
import One from "../images/Agegroup.png";
import Two from "../images/dept.png";
import Three from "../images/gender.png";
import Four from "../images/Decision_Tree.png";

const HumanResources = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Human Resources Dataset Analysis</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The purpose of this study is to delve into the variables that impact
          employment retention and identify key hiring qualities beyond work
          experience and education. This research uses R programming for data
          analysis and machine learning to create predictive models for a
          specific agency.
        </p>
      </section>

      <section>
        <h2>Company Overview</h2>
        <p>
          First, we analyze the company’s manpower to understand its operation
          and culture.
        </p>
        <h3>Employee Demographics by Age</h3>
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          <img
            src={One}
            alt="Age Group Distribution"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p>
          Observation: Graph shows the distribution of employees across
          different age groups.
        </p>

        <h3>Gender Distribution</h3>
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          <img
            src={Three}
            alt="Gender Distribution"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p>
          Observation: Pie chart illustrating the percentage of genders across
          the company.
        </p>

        <h3>Department Distribution</h3>
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          <img
            src={Two}
            alt="Department Distribution"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p>
          Observation: Bar chart showing the number of employees in each
          department.
        </p>

        <h3>Manager to Employee Ratio</h3>
        <p>For every 13 employees, there is 1 manager.</p>
      </section>

      <section>
        <h2>Data Analysis and Machine Learning</h2>
        <p>
          This section delves into various statistical methods and machine
          learning techniques used to predict employee retention.
        </p>

        <h3>Linear Regression Models</h3>
        <p>
          No significant linear relationships were observed in the data for
          predicting retention based on the factors studied.
        </p>

        <h3>Logistic Regression</h3>
        <p>Logistic regression was not found useful for this dataset.</p>

        <h3>Decision Tree Analysis</h3>
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          <img
            src={Four}
            alt="Decision Tree Analysis"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p>
          <strong>Observation:</strong>
        </p>
        <p>
          1. The initial split in the tree is based on the duration an employee
          has spent with their current manager, indicating its significance in
          predicting employee retention.
        </p>
        <p>
          2. Employees with less than a year under their current manager are
          further analyzed based on job satisfaction, distance from work, age,
          and education level.
        </p>
        <p>
          3. For employees with more than a year under their current manager,
          age is the next critical factor, with a specific focus on whether they
          are younger or older than 32 years.
        </p>
        <p>
          4. In the branch where employees are younger than 32, the tree further
          splits at 26 years old, then considers distance from work and hourly
          rate as subsequent factors.
        </p>
        <p>
          5. Job satisfaction is a pivotal variable, where a satisfaction level
          below 4 prompts additional branching in the tree.
        </p>
        <p>
          6. Gender is featured as a predictive factor in one branch, suggesting
          that it may have a contextual influence on employee retention.
        </p>
        <p>
          7. The leaves of the tree (the final nodes) predict the likelihood of
          employees staying with the company ('Employed') or leaving ('Depart'),
          with percentages indicating the confidence based on the model’s
          training data.
        </p>
        <p>
          8. The decision tree encapsulates various pathways that predict
          retention outcomes, informing HR strategies and potentially guiding
          interventions.
        </p>

        <h3>Random Forest Model</h3>
        <pre>{`Code:
input_data <- data.frame(
Age= 45,
Distance= 5,
Eduction= 4,
Satisfaction= 4,
Gender= 1,
Rate= 45,
Marital_Status= 1,
Years_at_Current_Position= 6,
Years_with_Current_Manager= 5
)

rmodel <- randomForest(Retention ~ Age + Distance + Eduction + Satisfaction + Gender + Rate + Marital_Status + Years_at_Current_Position + Years_with_Current_Manager, data= mydata, ntree=1470)
prediction <- predict(rmodel, input_data)

retention_prediction <- function(mydata, input_data){
if(prediction < .5){
cat('The predicted retention is high:', round(prediction * 100, 2), '%')
} else{
cat('The predicted retention is low:', round(prediction * 100, 2), '%')
}
}

retention_prediction(mydata, input_data)`}</pre>
        <p>
          Observation: The random forest model predicts employee retention with
          a high degree of accuracy.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          This research provided insights into the factors affecting employee
          retention and the effectiveness of various predictive modeling
          techniques.
        </p>
      </section>
    </div>
  );
};

export default HumanResources;
