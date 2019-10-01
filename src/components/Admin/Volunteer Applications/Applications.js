import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";

const Applications = () => {
  const Auth = useContext(AuthContext);

  const [applications, setApplications] = useState([]);
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
        const response = await apiService.volunteerApplications({
          headers: {
            "x-auth-token": Auth.token
          }
        });
        setApplications(response.volunteers);
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
            <h2>Donor Details</h2>
            {applications.length > 0 ? (
              current >= 0 ? (
                <>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Email:{" "}
                    </span>

                    {applications[current].email}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Alternate Phone:{" "}
                    </span>
                    {applications[current].alternatePhone}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Current Address:{" "}
                    </span>
                    {applications[current].currentAddress}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Permanent Address:{" "}
                    </span>
                    {applications[current].permanentAddress}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Blood Group:{" "}
                    </span>
                    {applications[current].bloodgroup}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Heard From:{" "}
                    </span>
                    {applications[current].heardFrom}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Skills:{" "}
                    </span>
                    {applications[current].skills.map(skill => (
                      <span>{skill} </span>
                    ))}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Suggestions:{" "}
                    </span>
                    {applications[current].suggestions}
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
              <Link to="/admin"> Dashboard</Link> > Volunteer Applications
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
                  <th scope="col">Year</th>
                  <th scope="col">Branch</th>
                  <th scope="col">College</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Project</th>
                  <th scope="col">Work Span</th>
                  <th scope="col">More Details</th>
                </tr>
              </thead>
              <tbody>
                {applications.length !== 0 ? (
                  applications.map((application, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{application.name}</td>
                        <td>{application.year}</td>
                        <td>{application.branch}</td>
                        <td>{application.college}</td>
                        <td>{application.phone}</td>
                        <td>{application.projects}</td>
                        <td>{application.workSpan}</td>
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

export default Applications;
