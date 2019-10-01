import React, { useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import useInputState from "../../../../hooks/useInputState";
import * as apiService from "../../../../utils/Services";

const AddUser = ({ history }) => {
  const Auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [name, handleNameChange] = useInputState("");
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  const [confirmPassword, handleConfirmPasswordChange] = useInputState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert("Password does not match");
    } else {
      setIsLoading(true);
      let body = {
        name,
        email,
        password
      };
      try {
        const response = await apiService.addUsers(body, {
          headers: {
            "x-auth-token": Auth.token
          }
        });
        setMessage(response.data.message);
        if (response.data.message === "success") {
          history.push("/manage-users");
        }
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err.response.data.message);
        setIsLoading(false);
        setMessage(err.response.data.message);
      }
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
                    <div className="col-12 abtmain mt-2">
                      <p style={{ color: "#fff" }}>Add User</p>
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
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="col-lg-12 mt-3">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handlePasswordChange}
                        className="form-control"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleConfirmPasswordChange}
                        className="form-control"
                        placeholder="Confirm Password"
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

export default AddUser;
