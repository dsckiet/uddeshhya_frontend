import React, { useState } from "react";
import * as apiService from "../../utils/Services";

const RegisterDonor = () => {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [hasDonated, setHasDonated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    let data = {
      name,
      bloodGroup,
      phone,
      email,
      dob,
      address,
      hasDonated
    };
    apiService
      .addDonor(data)
      .then(res => {
        setIsLoading(false);
        setMessage(res.message);
      })
      .catch(err => {
        console.log(err.response.data.message);
        setIsLoading(false);
        setMessage(err.response.data.message);
      });
  };
  return (
    <div className="container">
      <div className="abtmain mt-5">
        <p>Register as a Donor</p>
      </div>

      <div className="row">
        <div className="col-lg-12 mx-auto">
          <div className="card">
            <div className="main-box">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 mt-3">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
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
                        onChange={e => setBloodgroup(e.target.value)}
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
                        onChange={e => setPhone(e.target.value)}
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
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setDob(e.target.value)}
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
                              onChange={e => setHasDonated(e.target.value)}
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
                              onChange={e => setHasDonated(e.target.value)}
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
                        onChange={e => setAddress(e.target.value)}
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
                        Submit your application
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
                      {/* <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                      >
                        Register Donor
                      </button> */}
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
                    </div>
                    <div className="col-lg-12">
                      <h6>{message}</h6>
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

export default RegisterDonor;
