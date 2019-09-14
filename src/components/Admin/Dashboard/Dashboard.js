import React, { Component } from "react";
// import LeftPanel from "./LeftPanel";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="abtmain mt-5">
          <p>Dashboard</p>
        </div>
        {/* <LeftPanel /> */}
        <div className="row">
          <div className="col-lg-4">
            <a
              href="/available-donors"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>Donors</h4>
            </a>
          </div>

          <div className="col-lg-4">
            <a
              href="/blood-requests"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>
                Blood Requests
              </h4>
            </a>
          </div>

          <div className="col-lg-4">
            <a
              href="/volunteer-applications"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>
                Volunteer Applications
              </h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
