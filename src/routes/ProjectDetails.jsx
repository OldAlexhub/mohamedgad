import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Articles.css";

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
    <div className="article-container mt-3">
      {project ? (
        <article key={project._id}>
          <header className="article-header">
            <h1 className="article-title">{project.title}</h1>
            <p className="article-meta">
              <span>
                <strong>by:</strong> {project.by}
              </span>{" "}
              |
              <span>
                <strong> Posted:</strong>{" "}
                {new Date(project.data).toLocaleDateString()}
              </span>
            </p>
          </header>
          <div className="article-img-container mb-3">
            <img
              src={project.img}
              alt={project.title}
              className="img-fluid article-img"
            />
          </div>
          <section className="article-content">
            {project.overView &&
              project.overView
                .split("*")
                .filter(Boolean)
                .map((quote, index) => (
                  <p key={index} className="article-quote">
                    <q>{quote.trim().replace(/^["']+|["']+$/g, "")}</q>
                  </p>
                ))}
          </section>
          <footer className="article-footer">
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
          </footer>
        </article>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default ProjectDetails;

