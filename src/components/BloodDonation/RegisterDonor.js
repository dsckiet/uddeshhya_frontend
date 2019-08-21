import React, { Component } from "react";

class RegisterDonor extends Component {
  render() {
    return (
      <div className="container">
        <div className="abtmain mt-5">
          <p>Register as a Donor</p>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="card">
              <div className="main-box">
                <form onSubmit={this.handleSubmit}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Full name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 mt-3 form-group">
                        <label>Blood Group</label>
                        <select
                          className="form-control"
                          required
                          onChange={this.handleChange}
                          name="bloodgroup"
                          defaultValue="Select"
                        >
                          <option disabled>Select</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                          <option>O+</option>
                          <option>O-</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label>Phone</label>
                        <input
                          onChange={this.handleChange}
                          required
                          name="phone"
                          type="number"
                          className="form-control"
                          placeholder="Number"
                        />
                      </div>

                      <div className="col-lg-6 mt-3">
                        <label>Email</label>
                        <input
                          onChange={this.handleChange}
                          required
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="col-lg-6 mt-3">
                        <label>D.O.B.</label>
                        <input
                          onChange={this.handleChange}
                          required
                          name="dob"
                          type="date"
                          className="form-control"
                          placeholder="Branch"
                        />
                      </div>

                      <div className="col-lg-6 mt-3">
                        <label>Ever donated before</label>
                        <div className="row">
                          <div className="form-check ml-3 mr-3 mt-1">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                onChange={this.handleChange}
                                name="hasDonated"
                                id="exampleRadios1"
                                value="yes"
                              />
                              YES
                            </label>
                          </div>
                          <div className="form-check ml-3 mr-3 mt-1">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                onChange={this.handleChange}
                                name="hasDonated"
                                id="exampleRadios1"
                                value="no"
                              />
                              NO
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 mt-3">
                        <label>Address</label>
                        <textarea
                          className="form-control"
                          name="address"
                          cols="30"
                          onChange={this.handleChange}
                          required
                          rows="2"
                          placeholder="Address"
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
                          Register Donor
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

export default RegisterDonor;
