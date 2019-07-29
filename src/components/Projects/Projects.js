import React, { Component } from "react";
const Projects = props => {
  let { projects } = props;
  return (
    <div className="project" id="projects">
      <div className="container mt-5">
        <p
          className="abt"
          style={{ color: "rgba(213, 8, 8, 0.8)", padding: 0, margin: 0 }}
        >
          Our Projects
        </p>
        <div className="row mt-4">
          {projects.map(project => {
            return (
              <div className="col-lg-4" key={project._id}>
                <div className="card card_img mb-4" />
                <p className="card_body crd mb-2">{project.title}</p>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
