import React from "react";
import { Link } from "react-router-dom";
import HERO from "../images/hero1.webp";

const Hero = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url('${HERO}')`,
          height: "100vh", // Change the height to 100vh to cover the full screen height
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents repeating the background image
          backgroundSize: "fill", // Ensures the image covers the entire container
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                <Link to="/aboutme" className="text-white text-decoration-none">
                  About Me
                </Link>
              </h1>
              <h1 className="mb-3">
                <Link
                  to="/analysis"
                  className="text-white text-decoration-none"
                >
                  Professional Analysis
                </Link>
              </h1>
              <h1 className="mb-3">
                <Link
                  to="/projects"
                  className="text-white text-decoration-none"
                >
                  Webapp Projects
                </Link>
              </h1>
              <h1 className="mb-3">
                <Link
                  to="/articles"
                  className="text-white text-decoration-none"
                >
                  Data Analysis & Machine Learning
                </Link>
              </h1>
              <h1 className="mb-3">
                <Link
                  to="/megaprojects"
                  className="text-white text-decoration-none"
                >
                  Mega Projects
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
