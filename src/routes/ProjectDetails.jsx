import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SHOW_POSTS_DETAILS}/${projectId}`
        );

        if (response.status === 200) {
          setProject(response.data.show);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, [projectId]);
  return (
    <div className="container mt-3">
      <ul className="list-unstyled">
        {project ? ( // Make sure project is not null before rendering its details
          <li key={project._id}>
            <h1>{project.title}</h1>
            <p>
              <strong>by: </strong>
              {project.by}
            </p>
            <p>
              <strong>Posted: </strong>
              {new Date(project.data).toLocaleDateString()}{" "}
            </p>
            <div className="img-container mb-3" style={{ maxWidth: "100%" }}>
              <img
                src={project.img}
                alt={project.title}
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>
            {project.overView &&
              project.overView
                .split("*")
                .filter(Boolean)
                .map((quote, index) => (
                  <p key={index} style={{ fontSize: "1.25rem" }}>
                    <q style={{ fontStyle: "italic" }}>{quote.trim()}</q>
                  </p>
                ))}
            <div>
              {project.linkOne && (
                <a
                  href={project.linkOne}
                  className="btn btn-primary me-2"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Website
                </a>
              )}

              {project.linkTwo && (
                <a
                  href={project.linkTwo}
                  className="btn btn-success"
                  role="button"
                  download
                >
                  Download the App
                </a>
              )}
            </div>
          </li>
        ) : (
          <p>Loading project details...</p> // Provide a loading state or message
        )}
      </ul>
    </div>
  );
};

export default ProjectDetails;
