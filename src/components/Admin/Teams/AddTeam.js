import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useInputState from "../../../hooks/useInputState";
import * as apiService from "../../../utils/Services";

const AddTeam = ({ history }) => {
  const Auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [name, handleNameChange] = useInputState("");
  const [phone, handlePhoneChange] = useInputState("");
  const [email, handleEmailChange] = useInputState("");
  const [role, setRole] = useState("student");
  const [position, handlePositionChange] = useInputState("");
  const [fb, handleFbChange] = useInputState("");
  const [insta, handleInstaChange] = useInputState("");
  const [linkedin, handleLinkedinChange] = useInputState("");

  const [img, setImg] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    let body = {
      name: name.toUpperCase(),
      phone,
      email,
      role,
      position: position.toUpperCase(),
      fb,
      insta,
      linkedin,
      img
    };
    Object.keys(body).map(key => {
      formData.append(key, body[key]);
      return null;
    });
    try {
      const response = await apiService.addTeams(formData, {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth-token": Auth.token
        }
      });
      setMessage(response.data.message);
      if (response.data.message === "success") {
        history.push("/manage-teams");
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
                        <p style={{ color: "#fff" }}>Add Team Member</p>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleNameChange}
                          className="form-control"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={handleEmailChange}
                          className="form-control"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Position</label>
                        <input
                          type="text"
                          name="position"
                          onChange={handlePositionChange}
                          className="form-control"
                          placeholder="Enter Position"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Phone</label>
                        <input
                          type="text"
                          name="phone"
                          onChange={handlePhoneChange}
                          className="form-control"
                          placeholder="Enter Phone no"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Select Role</label>
                        <select
                          className="form-control"
                          required
                          onChange={e => setRole(e.target.value)}
                          name="role"
                        >
                          <option value="student">Student</option>
                          <option value="ngo">NGO</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Facebook Link</label>
                        <input
                          type="text"
                          name="fb"
                          onChange={handleFbChange}
                          className="form-control"
                          placeholder="Enter facebook profile link"
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Instagram Link</label>
                        <input
                          type="text"
                          name="insta"
                          onChange={handleInstaChange}
                          className="form-control"
                          placeholder="Enter instagram profile link"
                        />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <label>Linkedin Link</label>
                        <input
                          type="text"
                          name="linkedin"
                          onChange={handleLinkedinChange}
                          className="form-control"
                          placeholder="Enter linkedin profile link"
                        />
                      </div>

                      <div className="col-lg-12 mt-3">
                        <label>Add member Image</label>
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

export default AddTeam;
