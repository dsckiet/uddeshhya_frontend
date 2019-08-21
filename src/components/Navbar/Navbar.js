import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.css";
import TopNav from "./TopNav";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopNav/>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width="60px"
                // height="54px"
                style={{ marginRight: "32px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto nav">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/about-uddeshhya">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ways-to-help">
                    Ways to Help
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.ketto.org/"
                    className="nav-link nav-red"
                    target="_blank"
                  >
                    Donate now
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/become-a-volunteer" className="nav-link nav-red">
                    Register as a Volunteer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blood-donation-portal" className="nav-link nav-red">
                    Blood Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
