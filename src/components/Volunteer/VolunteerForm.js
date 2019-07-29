import React, { Component } from 'react';

class VolunteerForm extends Component {
    state = {  }
    render() { 
        return ( <div className="fluid-container pt-4">
        {/* <img src="assets/images/Frame(1).png" style="position: absolute; left: 0;"/ */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="card">
                <div className="main-box">
                  <div className="m-3">
                    <h3><b>Volunteer Form</b></h3>
                  </div>
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6 mt-3">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Number"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Alternate Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Number"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Current Address</label>
                          <textarea
                            className="form-control"
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Address"
                          ></textarea>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Permanent Address</label>
                          <textarea
                            className="form-control"
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Address"
                          ></textarea>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Branch</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Branch"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Year</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Year"
                          />
                        </div>
                        <div className="col-lg-6 mt-3 form-group">
                          <label>Blood Group</label>
                          <select className="form-control">
                            <option disabled selected>Select</option>
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
                          <label>College</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="College"
                          />
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label>What do you know about UDDESHHYA?</label>
                          <textarea
                            type="text"
                            rows="5"
                            className="form-control"
                            placeholder="About..."
                          ></textarea>
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label>Heard From?</label>
                          <div className="row">
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option1"
                              />
                              <label className="form-check-label">Faculity</label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option2"
                              />
                              <label className="form-check-label">Friends</label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option3"
                              />
                              <label className="form-check-label">Social Media</label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option4"
                              />
                              <label className="form-check-label">Other</label>
                            </div>
                          </div>
                        </div>
                        <div className=" col-lg-12 mt-3">
                          <label>Work Span</label>
                          <div className="row">
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option1"
                              />
                              <label className="form-check-label">6 Months</label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option2"
                              />
                              <label className="form-check-label">1 Year</label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="option2"
                              />
                              <label className="form-check-label">Other</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label>Skills</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Skills (comma separated)"
                          />
                        </div>
                        <div className="col-lg-12 mt-3 mb-4">
                          <label>Suggestion</label>
                          <textarea
                            className="form-control"
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Suggestion..."
                          ></textarea>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <button
                            type="button"
                            className="btn btn-success"
                            style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)'}}
                          >
                            Submit your application
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> );
    }
}
 
export default VolunteerForm;