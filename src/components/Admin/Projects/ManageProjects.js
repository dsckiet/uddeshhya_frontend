import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";

const ManageProjects = () => {
  const Auth = useContext(AuthContext);

  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = i => {
    setShow(true);
  };

  const hideModal = () => {
    window.scrollTo(0, 0);
    setShow(false);
  };

  useEffect(() => {
    const getProjectsList = async () => {
      try {
        const response = await apiService.getProjectsData();
        setProjects(response.projects);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    getProjectsList();
  }, [Auth]);

  const handleDeleteProject = async id => {
    setIsLoading(true);
    try {
      await apiService.deleteProject(id, {
        headers: {
          "x-auth-token": Auth.token
        }
      });
      const response = await apiService.getProjectsData();
      setProjects(response.projects);
      hideModal();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data.message);
    }
  };

  return (
    <>
      <Modal open={show} onClose={hideModal} center>
        <div className="row">
          <div className="col-lg-12 m-2 p-3">
            <h2>Do you want to delete this project?</h2>
            <button
              className="btn btn-danger"
              disabled={isLoading}
              onClick={() => handleDeleteProject(projects[current]._id)}
            >
              {isLoading ? "Please Wait.." : "Yes"}
            </button>
            <button
              className="btn btn-secondary m-2"
              disabled={isLoading}
              onClick={hideModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 mt-4 mb-4 abtmain">
            <p>
              <Link to="/admin"> Dashboard</Link> > Projects
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Link to="/add-project" className="btn btn-success mb-2">
              Add Project
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-striped table-responsive">
              <thead className="table-danger">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Project Link</th>
                  <th scope="col">Delete ?</th>
                </tr>
              </thead>
              <tbody>
                {projects.length !== 0 ? (
                  projects.map((project, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{project.title}</td>
                        <td>
                          {" "}
                          <Link
                            to={`/projects/${project._id}`}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <b>View More</b>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              setCurrent(i);
                              showModal(i);
                            }}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <>
                    <h3 className="mt-2">No projects found</h3>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProjects;
