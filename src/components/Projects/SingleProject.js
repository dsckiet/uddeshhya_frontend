import React, { Component } from "react";
import * as apiService from "../../utils/Services";

class SingleProject extends Component {
  state = {
    title: "",
    image: "",
    description: ""
  };

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];
    apiService.getSingleProject(id).then(({ project }) => {
      this.setState({
        title: project.title,
        image: project.img.url,
        description: project.description
      });
    });
  }

  render() {
    let { title, image, description } = this.state;
    return (
      <div className="project">
        <div className="container mt-5">
          <p
            className="abt"
            style={{ color: "rgba(213, 8, 8, 0.8)", padding: 0, margin: 0 }}
          >
            {title}
          </p>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={image}
                style={{ padding: 0, borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                width="100%"
                alt={title}
              />
            </div>
            <div className="col-lg-8">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;
