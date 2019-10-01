import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";

const Donors = () => {
  const Auth = useContext(AuthContext);

  const [bloodGroup, setBloodgroup] = useState("A+");
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(-1);

  const showModal = i => {
    setShow(true);
  };

  const hideModal = () => {
    window.scrollTo(0, 0);
    setShow(false);
  };

  useEffect(() => {
    const getDonorsList = async () => {
      setIsLoading(true);
      try {
        const response = await apiService.getDonorsList(
          { bloodGroup },
          {
            headers: {
              "x-auth-token": Auth.token
            }
          }
        );
        setDonors(response.donors);
        setIsLoading(false);
      } catch (err) {
        console.log(err.response.data.message);
        setIsLoading(false);
      }
    };
    getDonorsList();
  }, [bloodGroup, Auth]);

  return (
    <>
      <Modal open={show} onClose={hideModal} center>
        <div className="row">
          <div className="col-lg-12">
            <h2>Donor Details</h2>
            {donors.length > 0 ? (
              current >= 0 ? (
                <>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Address:{" "}
                    </span>

                    {donors[current].address}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Phone:{" "}
                    </span>
                    {donors[current].phone}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Email:{" "}
                    </span>
                    {donors[current].email}
                  </div>
                </>
              ) : null
            ) : null}
          </div>
        </div>
      </Modal>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 mt-4 mb-4 abtmain">
            <p>
              <Link to="/admin"> Dashboard</Link> > Available Donors
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <form onSubmit={handleSubmit}> */}
            <label>Blood Group</label>
            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <select
                    className="form-control"
                    required
                    onChange={e => setBloodgroup(e.target.value)}
                    name="bloodgroup"
                  >
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
              </div>
              <div className="col-lg-6 mb-2">
                <h3>{isLoading ? "Please Wait..." : null}</h3>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-striped table-responsive">
              <thead className="table-danger">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Has Donated</th>
                  <th scope="col">More Details</th>
                </tr>
              </thead>
              <tbody>
                {donors.length !== 0 ? (
                  donors.map((donor, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{donor.name}</td>
                        <td>{donor.bloodGroup}</td>
                        <td>{donor.hasDonated ? "Yes" : "No"}</td>
                        <td>
                          <button
                            className="btn btn-sm"
                            onClick={() => {
                              setCurrent(i);
                              showModal(i);
                            }}
                          >
                            More
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <>
                    <h3 className="mt-2">No donors found</h3>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donors;
