import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_SHOW_POSTS);

        if (response.status === 200) {
          setProjects(response.data.show);
          // console.log(response.data.show);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project._id} className="col-md-4 mb-3">
            <div className="card card-fixed-height">
              <img
                src={project.img}
                alt={project.title}
                className="card-img-top img-fluid rounded-top"
              />
              <div className="card-body card-body-fixed-height">
                <h5 className="card-title">
                  <strong>Project: </strong>
                  {project.title}
                </h5>
                <p className="card-text">
                  <strong>Overview: </strong>
                  {truncateText(project.overView, 35)}
                </p>
                <Link
                  to={`/projects/${project._id}`}
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
