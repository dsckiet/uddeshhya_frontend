import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card mt-5">
              <div className="main-box">
                <form onSubmit={this.handleSubmit}>
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                        {/* {this.state.isLoading ? (
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
                          this.state.message
                        )} */}
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
  }
}

export default Login;
