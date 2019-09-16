import React, { Component } from "react";
import * as apiService from "../../utils/Services";
import { Link } from "react-router-dom";

class AllProjects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    apiService.getProjectsData().then(data => {
      this.setState({ projects: data.projects });
    });
  }

  render() {
    let { projects } = this.state;
    return (
      <div className="project">
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
                  <div
                    className="card card_img mb-4"
                    style={{
                      background: `linear-gradient(89.35deg, rgba(0, 0, 0, 0.4) 6.39%, rgba(255, 255, 255, 0) 60.74%), url(${project.img.url})`
                    }}
                  />
                  <p className="card_body crd mb-2">
                    <b>{project.title}</b>
                  </p>
                  <p>
                    {project.description.slice(0, 150)}...
                    <Link
                      to={`/projects/${project._id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <b>Read More</b>
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AllProjects;
