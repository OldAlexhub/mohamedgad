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
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
