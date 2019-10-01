import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="abtmain mt-5">
          <p>Dashboard</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Link
              to="/available-donors"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>
                Available Donors
              </h4>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link
              to="/blood-requests"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>
                Blood Requests
              </h4>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link
              to="/volunteer-applications"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>
                Volunteer Applications
              </h4>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link
              to="/manage-users"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>Users</h4>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link
              to="/manage-projects"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>Projects</h4>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link
              to="/manage-teams"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>Teams</h4>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link
              to="/money-donations"
              className="card"
              style={{ background: "#fff" }}
            >
              <h4 style={{ marginBottom: 0, fontWeight: 700 }}>
                Money Donations
              </h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
