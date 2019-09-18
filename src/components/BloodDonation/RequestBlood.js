import React, { useState } from "react";
import * as apiService from "../../utils/Services";

const RequestBlood = () => {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [requestFor, setRequestFor] = useState("");
  const [require, setRequire] = useState("");
  const [units, setUnits] = useState("");
  const [reason, setReason] = useState("");
  const [neededBy, setNeededBy] = useState("");
  const [timings, setTimings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    let data = {
      name,
      bloodGroup,
      phone,
      dob,
      address,
      pincode,
      requestFor,
      require,
      units,
      reason,
      neededBy,
      timings
    };
    apiService
      .addBloodRequest(data)
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
        <p>Request Blood For</p>
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
                      <label>Pincode</label>
                      <input
                        onChange={e => setPincode(e.target.value)}
                        required
                        name="pincode"
                        type="number"
                        className="form-control"
                        placeholder="Enter Pincode"
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
                      <label>Requested for</label>
                      <select
                        className="form-control"
                        required
                        onChange={e => setRequestFor(e.target.value)}
                        name="requestFor"
                        defaultValue="Select"
                      >
                        <option disabled>Select</option>
                        <option value="self">Self</option>
                        <option value="other">Others</option>
                      </select>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label>Requirement</label>
                      <select
                        className="form-control"
                        required
                        onChange={e => setRequire(e.target.value)}
                        name="blood/platelets"
                        defaultValue="Select"
                      >
                        <option disabled>Select</option>
                        <option value="blood">Blood</option>
                        <option value="platelets">Platelets</option>
                      </select>
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label>Required Blood/Platelets Units</label>
                      <input
                        type="number"
                        name="units"
                        required
                        onChange={e => setUnits(e.target.value)}
                        className="form-control"
                        placeholder="Enter required units"
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label>Needed By (Date)</label>
                      <input
                        type="date"
                        name="neededBy"
                        required
                        onChange={e => setNeededBy(e.target.value)}
                        className="form-control"
                        placeholder="Year"
                      />
                    </div>

                    <div className="col-lg-6 mt-3">
                      <label>Timings</label>
                      <input
                        type="text"
                        name="timings"
                        required
                        onChange={e => setTimings(e.target.value)}
                        className="form-control"
                        placeholder="Eg: 9 to 5"
                      />
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
                    <div className="col-lg-6 mt-3">
                      <label>Reason</label>
                      <textarea
                        className="form-control"
                        name="reason"
                        cols="30"
                        onChange={e => setReason(e.target.value)}
                        required
                        rows="2"
                        placeholder="Reason"
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

export default RequestBlood;
