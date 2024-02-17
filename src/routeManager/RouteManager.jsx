import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "../components/Layout";
import AboutMe from "../routes/AboutMe";
import Home from "../routes/Home";
import Hobbies from "../routes/Hobbies";
import Analysis from "../routes/Analysis";
import Protfolio from "../routes/Protfolio";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
