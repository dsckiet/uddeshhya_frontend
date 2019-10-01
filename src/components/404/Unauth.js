import React from "react";
import { Link } from "react-router-dom";
import notImage from "../../assets/images/illustration.svg";

const UnAuth = () => {
  return (
    <div className="fluid-container" style={{ paddingBottom: "0" }}>
      <div className="container " style={{ height: "100vh" }}>
        <img
          src={notImage}
          alt=""
          style={{
            position: "absolute",
            transform: "rotate(-90deg)",
            right: "32px",
            opacity: "0.3"
          }}
        />

        <div className="row pb-5 pt-1">
          <div className="col-md-5">
            <img
              className="pt-5 mt-3"
              src={notImage}
              style={{ zIndex: "-99", position: "absolute" }}
              alt=""
            />
          </div>
          <div className="col-md-7 col-12 pt-5 mt-3">
            <h1 className="title" style={{ fontSize: "4em", color: "#444444" }}>
              Unauthorized!
            </h1>
            <h2 className="title" style={{ fontSize: "6em", color: "#4C4A78" }}>
              403
            </h2>

            <br />
            <Link
              to="/"
              className="btn btn-primary prime_btn"
              onClick={() => window.scrollTo(0, 0)}
            >
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAuth;
