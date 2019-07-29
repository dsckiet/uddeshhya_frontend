import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo (2).svg"
import "./style.css"
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <img
              src={logo}
              alt="logo"
              width="48px"
              height="54px"
              style={{marginRight: "50px"}}
            />
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Way to Help
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link nav-red"
                  >
                    Donate now
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link nav-red"
                  >
                    Be a Volunteer
                  </a>
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
