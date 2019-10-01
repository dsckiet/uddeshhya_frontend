import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { DispatchContext } from "../../../contexts/AuthProvider";
import useInputState from "../../../hooks/useInputState";
import * as apiService from "../../../utils/Services";

const Login = ({ history }) => {
  const Auth = useContext(AuthContext);
  const dispatch = useContext(DispatchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  const [message, setMessage] = useState("");

  // already login then push to homepage
  useEffect(() => {
    if (Auth.token !== "") {
      history.push("/");
    }
  }, [Auth.token, history]);

  const handleSubmit = async e => {
    setIsLoading(true);
    e.preventDefault();
    let body = {
      email,
      password
    };
    try {
      const response = await apiService.login(body);
      setMessage(response.data.message);
      window.scrollTo(0, 0);
      dispatch({
        type: "SET",
        user: response.data.user,
        token: response.headers["x-auth-token"]
      });
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
                    <div className="col-12 abtmain mt-2">
                      <p style={{ color: "#fff" }}>Login</p>
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

                    <div
                      className="col-lg-12 mt-4 mb-4"
                      style={{ display: "flex" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                      >
                        Login
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

export default Login;
