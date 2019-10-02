import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useInputState from "../../../hooks/useInputState";
import * as apiService from "../../../utils/Services";

const AddProject = ({ history }) => {
  const Auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [title, handleTitleChange] = useInputState("");
  const [description, handleDescriptionChange] = useInputState("");
  const [img, setImg] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    let body = {
      title: title.toUpperCase(),
      description,
      img
    };
    Object.keys(body).map(key => {
      formData.append(key, body[key]);
      return null;
    });
    try {
      const response = await apiService.addProjects(formData, {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth-token": Auth.token
        }
      });
      setMessage(response.data.message);
      if (response.data.message === "success") {
        history.push("/manage-projects");
      }
      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err.response.data.message);
      setIsLoading(false);
      setMessage(err.response.data.message);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card mt-5">
            <div className="main-box">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    <form encType="multipart/form-data">
                      <div className="col-12 abtmain mt-2">
                        <p style={{ color: "#fff" }}>Add Project</p>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Title</label>
                        <input
                          type="text"
                          name="title"
                          onChange={handleTitleChange}
                          className="form-control"
                          placeholder="Enter Project Title"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Description</label>
                        <textarea
                          name="description"
                          onChange={handleDescriptionChange}
                          className="form-control"
                          placeholder="Enter Project Description"
                          required
                        ></textarea>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <label>Add Project Image</label>
                        <input
                          type="file"
                          name="img"
                          onChange={e => setImg(e.target.files[0])}
                          className="form-control"
                          required
                        />
                      </div>

                      <div
                        className="col-lg-12 mt-4 mb-4"
                        style={{ display: "flex" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-success"
                          style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                        >
                          Add
                        </button>

                        {isLoading ? (
                          <div
                            className="ld ld-ring ld-spin"
                            style={{
                              marginLeft: 8,
                              alignSelf: "center",
                              width: "1.3em",
                              height: "1.3em"
                            }}
                          />
                        ) : null}
                        {/* {state.isLoading ? (
                      <div
                        className="ld ld-ring ld-spin"
                        style={{
                          marginLeft: 8,
                          alignSelf: "center",
                          width: "1.3em",
                          height: "1.3em"
                        }}
                      />
                    ) : (
                      state.message
                    )} */}

                        <div className="col-lg-12">
                          <h6>{message}</h6>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
