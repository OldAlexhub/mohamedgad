import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "../components/Layout";
import AboutMe from "../routes/AboutMe";
import Home from "../routes/Home";
import Hobbies from "../routes/Hobbies";
import Analysis from "../routes/Analysis";
import Protfolio from "../routes/Protfolio";
import Projects from "../routes/Projects";
import ProjectDetails from "../routes/ProjectDetails";
import Articles from "../routes/Articles";
import CarSales from "../Articles/CarSales";
import SocioPolitcs from "../Articles/SocioPolitcs";
import HumanResources from "../Articles/HumanResources";
import Interactive from "../Articles/Interactive";
import Dashboard from "../Articles/Dashboard";
import Evsales from "../Articles/Evsales";
import PoliticalAnalysis from "../Articles/PoliticalAnalysis";
import CrimesInDenver from "../Articles/CrimesInDenver";
import Taxi from "../Articles/Taxi";
import HRCaseStudy from "../Articles/HRCaseStudy";
import MachineLearning from "../Articles/MachineLearning";
import Airlines from "../Articles/Airlines";
import DayTrading from "../Articles/DayTrading";
import Sentiment from "../Articles/Sentiment";
import Medical from "../Articles/Medical";


const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="portfolio" element={<Protfolio />} />
          <Route path="projects" element={<Projects />} />
          <Route path="articles" element={<Articles />} />
          <Route path="carsales" element={<CarSales />} />
          <Route path="politicsone" element={<SocioPolitcs />} />
          <Route path="humanresource" element={<HumanResources />} />
          <Route path="interactive" element={<Interactive />} />
          <Route path="hrinteractive" element={<Dashboard />} />
          <Route path="evsales" element={<Evsales />} />
          <Route path="politicstwo" element={<PoliticalAnalysis />} />
          <Route path="articles" element={<Articles />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/crimesindenver" element={<CrimesInDenver />} />
          <Route path="/taxi" element={<Taxi />} />
          <Route path="/HRCaseStudy" element={<HRCaseStudy />} />
          <Route path="/machinelearning1" element={<MachineLearning />} />
          <Route path="/invistcoairlines" element={<Airlines />} />
          <Route path="/daytrading" element={<DayTrading />} />
          <Route path="/sentiment" element={<Sentiment />} />
          <Route path="/medical" element={<Medical />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;

