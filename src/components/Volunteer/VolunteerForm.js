import React, { Component } from "react";
import * as apiService from "../../utils/Services";
import "../../assets/stylesheets/loading.css";
// import "../../assets/stylesheets/loading-btn.css";

class VolunteerForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    alternatePhone: "",
    college: "",
    branch: "",
    year: "",
    currentAddress: "",
    permanentAddress: "",
    bloodgroup: "",
    skills: "",
    workSpan: "",
    suggestion: "",
    heardFrom: "",
    message: "",
    isLoading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true, show: false });
    let {
      name,
      email,
      phone,
      alternatePhone,
      college,
      branch,
      year,
      currentAddress,
      permanentAddress,
      bloodgroup,
      skills,
      workSpan,
      suggestion,
      heardFrom
    } = this.state;
    let data = {
      name,
      email,
      phone,
      alternatePhone,
      college,
      branch,
      year,
      currentAddress,
      permanentAddress,
      bloodgroup,
      skills,
      workSpan,
      suggestion,
      heardFrom
    };
    apiService.addVolunteerData(data).then(res => {
      // console.log(data);
      if (res.message === "success") {
        this.setState({ message: "success" });
        data = {
          name: "",
          email: "",
          phone: "",
          alternatePhone: "",
          college: "",
          branch: "",
          year: "",
          currentAddress: "",
          permanentAddress: "",
          suggestion: "",
          skills: "",
          heardFrom: "",
          workSpan: "",
          bloodgroup: "",
          message: "success",
          isLoading: false
        };
        this.setState(data);
        this.componentDidMount();
      }
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name === "skills") {
      let skills = e.target.value;
      skills = skills.split(",");
      this.setState({ skills });
    }
    if(this.state.message === "success") {
      this.componentDidMount();
    }
  };

  componentDidMount() {}

  render() {
    return (
      <div className="fluid-container pt-4">
        <div className="container">
          <p
            className="abt"
            style={{ color: "rgba(213, 8, 8, 0.8)", padding: 0, margin: 0 }}
          >
            Volunteer Form
          </p>
          <br />
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
                        <div className="col-lg-6 mt-3">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            required
                            className="form-control"
                            placeholder="Email Address"
                          />
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
                          <label>Alternate Phone</label>
                          <input
                            type="number"
                            onChange={this.handleChange}
                            name="alternatePhone"
                            className="form-control"
                            placeholder="Number"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Current Address</label>
                          <textarea
                            className="form-control"
                            name="currentAddress"
                            cols="30"
                            onChange={this.handleChange}
                            required
                            rows="2"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Permanent Address</label>
                          <textarea
                            className="form-control"
                            name="permanentAddress"
                            cols="30"
                            onChange={this.handleChange}
                            rows="2"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Branch</label>
                          <input
                            onChange={this.handleChange}
                            required
                            name="branch"
                            type="text"
                            className="form-control"
                            placeholder="Branch"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label>Year</label>
                          <input
                            type="number"
                            name="year"
                            required
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Year"
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
                          <label>College</label>
                          <input
                            type="text"
                            onChange={this.handleChange}
                            required
                            name="college"
                            className="form-control"
                            placeholder="College"
                          />
                        </div>
                        {/* <div className="col-lg-12 mt-3">
                          <label>What do you know about UDDESHHYA?</label>
                          <textarea
                            type="text"
                            rows="5"
                            className="form-control"
                            placeholder="About..."
                          ></textarea>
                        </div> */}
                        <div className="col-lg-12 mt-3">
                          <label>Heard From?</label>
                          <div className="row">
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="heardFrom"
                                  onChange={this.handleChange}
                                  id="exampleRadios1"
                                  value="Faculity"
                                />
                                Faculty
                              </label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  onChange={this.handleChange}
                                  name="heardFrom"
                                  id="exampleRadios1"
                                  value="Friends"
                                />
                                Friends
                              </label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  onChange={this.handleChange}
                                  name="heardFrom"
                                  id="exampleRadios1"
                                  value="Social media"
                                />
                                Social Media
                              </label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  onChange={this.handleChange}
                                  name="heardFrom"
                                  id="exampleRadios1"
                                  value="Others"
                                />
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className=" col-lg-12 mt-3">
                          <label>Work Span</label>
                          <div className="row">
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  onChange={this.handleChange}
                                  className="form-check-input"
                                  type="radio"
                                  name="workSpan"
                                  id="workSpan1"
                                  value="6 Months"
                                />
                                6 Months
                              </label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="workSpan"
                                  onChange={this.handleChange}
                                  id="workSpan1"
                                  value="1 Year"
                                />
                                1 Year
                              </label>
                            </div>
                            <div className="form-check ml-3 mr-3 mt-1">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="workSpan"
                                  id="workSpan1"
                                  onChange={this.handleChange}
                                  value="Other"
                                />
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label>Skills</label>
                          <input
                            type="text"
                            name="skills"
                            onChange={this.handleChange}
                            className="form-control"
                            placeholder="Your Skills (comma separated)"
                          />
                        </div>
                        <div className="col-lg-12 mt-3 mb-4">
                          <label>Suggestion</label>
                          <textarea
                            className="form-control"
                            name="suggestion"
                            cols="30"
                            rows="2"
                            onChange={this.handleChange}
                            placeholder="Suggestion..."
                          />
                        </div>
                        <div className="col-lg-6 mb-4" style={{display: 'flex'}}>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                          >
                            Submit your application
                          </button>
                          {this.state.isLoading ? (
                            <div className="ld ld-ring ld-spin" style={{marginLeft: 8, alignSelf: 'center', width: '1.3em', height: '1.3em'}} />
                          ) : this.state.message}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VolunteerForm;
