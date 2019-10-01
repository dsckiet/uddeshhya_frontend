import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";

const Requests = () => {
  const Auth = useContext(AuthContext);

  //   const [bloodGroup, setBloodgroup] = useState("A+");
  const [requests, setRequests] = useState([]);
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
      try {
        const response = await apiService.getBloodRequestsList({
          headers: {
            "x-auth-token": Auth.token
          }
        });
        setRequests(response.requests);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    getDonorsList();
  }, [Auth]);

  return (
    <>
      <Modal open={show} onClose={hideModal} center>
        <div className="row">
          <div className="col-lg-12">
            <h2>Request Details</h2>
            {requests.length > 0 ? (
              current >= 0 ? (
                <>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Address:{" "}
                    </span>

                    {requests[current].address}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Pincode:{" "}
                    </span>
                    {requests[current].pincode}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Phone:{" "}
                    </span>
                    {requests[current].phone}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Reason:{" "}
                    </span>
                    {requests[current].reason}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Needed By:{" "}
                    </span>
                    {requests[current].neededBy}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Timings:{" "}
                    </span>
                    {requests[current].timings}
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
              <Link to="/admin"> Dashboard</Link> > Blood Requests
            </p>
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
                  <th scope="col">Requirement Type</th>
                  <th scope="col">Requirement For</th>
                  <th scope="col">Units</th>
                  <th scope="col">More Details</th>
                </tr>
              </thead>
              <tbody>
                {requests.length !== 0 ? (
                  requests.map((request, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{request.name}</td>
                        <td>{request.bloodGroup}</td>
                        <td>{request.require}</td>
                        <td>{request.requestFor}</td>
                        <td>{request.units}</td>

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
                    <h3 className="mt-2">No blood requests found</h3>
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

export default Requests;
