import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.css";
import TopNav from "./TopNav";
import { AuthContext, DispatchContext } from "../../contexts/AuthProvider";
const Navbar = () => {
  const Auth = useContext(AuthContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <TopNav />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              {Auth.user === "" ? (
                <>
                  <li className="nav-item">
                    <Link to="/donate-now" className="nav-link nav-red">
                      Donate now
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/become-a-volunteer" className="nav-link nav-red">
                      Register as a Volunteer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/blood-donation-portal"
                      className="nav-link nav-red"
                    >
                      Blood Portal
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link nav-red">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/admin" className="nav-link nav-red">
                      Admin Panel
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      onClick={() => {
                        dispatch({ type: "UNSET" });
                      }}
                      className="nav-link nav-red"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
