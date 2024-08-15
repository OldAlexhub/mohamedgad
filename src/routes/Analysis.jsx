import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register the components needed for the charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analysis = () => {
  const sectorEfficiency1 = [
    { sector: "Transportation", efficiency: 100 },
    { sector: "Technology", efficiency: 90 },
    { sector: "Financial", efficiency: 85 },
    { sector: "HR and Talent", efficiency: 80 },
    { sector: "Retail", efficiency: 75 },
    { sector: "Customer Service", efficiency: 95 },
    { sector: "Marketing", efficiency: 80 },
    { sector: "Operational Improvement", efficiency: 90 },
    { sector: "Data Management", efficiency: 100 },
    { sector: "Safety and Compliance", efficiency: 85 },
  ];
  const sectorEfficiencyChartData = {
    labels: sectorEfficiency1.map((data) => data.sector),
    datasets: [
      {
        label: "Sector Efficiency (%)",
        data: sectorEfficiency1.map((data) => data.efficiency),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40",
          "#E7E9ED",
          "#C9CBCF",
          "#A4E8E0",
          "#4D5360",
          "#36A2EB",
        ],
      },
    ],
  };
  const experienceData1 = [
    { role: "LYNX", duration: 2.8 },
    { role: "Trans Voyage Taxi", duration: 6 },
    { role: "Metro Transportation", duration: 1 },
    { role: "Green Taxi Cooperative", duration: 1 },
    { role: "Mile High Cab Inc", duration: 2 },
    { role: "Ralston Convenience Store", duration: 2 },
  ];
  const experienceChartData = {
    labels: experienceData1.map((data) => data.role),
    datasets: [
      {
        label: "Years of Experience",
        data: experienceData1.map((data) => data.duration),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#E7E9ED",
          "#4BC0C0",
          "#FF9F40",
        ],
        hoverOffset: 4,
      },
    ],
  };
  // const experienceData = [
  //   {
  //     role: "Manager of Mobility Services Data at LYNX",
  //     duration: "2+ years",
  //     startDate: "10/2021",
  //     endDate: "Current",
  //   },
  //   {
  //     role: "Executive Director of Operations at Trans Voyage Taxi",
  //     duration: "5+ years",
  //     startDate: "08/2018",
  //     endDate: "Current",
  //   },
  //   {
  //     role: "Talent Acquisition Manager at Metro Transportation Planning And Solutions Group",
  //     duration: "1 year 1 month",
  //     startDate: "04/2017",
  //     endDate: "05/2018",
  //   },
  //   {
  //     role: "General Manager at Green Taxi Cooperative",
  //     duration: "1 year 1 month",
  //     startDate: "03/2016",
  //     endDate: "04/2017",
  //   },
  //   {
  //     role: "General Manager at Mile High Cab Inc",
  //     duration: "2 years 1 month",
  //     startDate: "02/2014",
  //     endDate: "03/2016",
  //   },
  //   {
  //     role: "General Store Manager at Ralston Convenience Store",
  //     duration: "1 year 11 months",
  //     startDate: "08/2012",
  //     endDate: "07/2014",
  //   },
  // ];

  // const sectorEfficiency = [
  //   { sector: "Transportation and Mobility Services", efficiency: "100%" },
  //   { sector: "Technology and Product Development", efficiency: "90%" },
  //   { sector: "Financial Services", efficiency: "85%" },
  //   { sector: "Human Resources and Talent Management", efficiency: "80%" },
  //   { sector: "Retail and Convenience Store Management", efficiency: "75%" },
  //   {
  //     sector: "Customer Service and Relationship Management",
  //     efficiency: "95%",
  //   },
  //   { sector: "Marketing and Business Development", efficiency: "80%" },
  //   {
  //     sector: "Operational Improvement and Process Optimization",
  //     efficiency: "90%",
  //   },
  //   { sector: "Data Management and Analysis", efficiency: "100%" },
  //   { sector: "Safety and Compliance", efficiency: "85%" },
  // ];

  // const uniqueExperiences = [
  //   // Placeholder for unique experiences
  //   "Cross-Functional Project Management",
  //   "Advanced Data Monitoring and Analysis",
  //   "Strategic Business Relationships and Partnerships",
  // ];

  const totalAccumulativeYears = 15; // Calculated total years of experience
  // const chartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: true, // You can adjust aspect ratio according to your needs
  //   aspectRatio: 2, // Adjust this value to make the chart smaller or bigger
  // };
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, // Increase this value to make the pie chart appear smaller
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <h2>Total Leadership/Management Experience</h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                <h4>
                  {" "}
                  <strong>~{totalAccumulativeYears.toFixed(1)} years</strong>
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2>Leadership/Management Experience</h2>
          <Pie data={experienceChartData} options={pieChartOptions} />
          {/* <ul>
            {experienceData.map((exp, index) => (
              <li key={index}>
                {exp.role} - Duration: {exp.duration} (From {exp.startDate} to{" "}
                {exp.endDate})
              </li>
            ))}
          </ul> */}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2>Sector Efficiency</h2>
          <Bar data={sectorEfficiencyChartData} options={pieChartOptions} />
          {/* <ul>
            {sectorEfficiency.map((sector, index) => (
              <li key={index}>
                {sector.sector}: {sector.efficiency} efficiency
              </li>
            ))}
          </ul> */}
        </Col>
      </Row>
      <Row>
        {/* <Col xs={12}>
          <h2>Unique Experiences</h2>
          <ul>
            {uniqueExperiences.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Analysis;
