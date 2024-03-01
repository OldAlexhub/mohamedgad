import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HERO from "../images/hero1.webp";

const Hero = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_SHOW_POSTS);

        if (response.status === 200) {
          setProjects(response.data.show);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url('${HERO}')`,
          height: 800,
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
                  Checkout {projects.length} Projects
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
