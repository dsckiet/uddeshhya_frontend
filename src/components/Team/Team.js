import React from "react";
import "./style.css";

const Team = props => {
  let { team } = props;
  return (
    <div className="team">
      <div className="container mt-5">
        <p
          className="abt"
          style={{ color: "rgba(213, 8, 8, 0.8)", padding: 0, margin: 0 }}
        >
          Our Team
        </p>
        <div className="row mt-4">
          {team.map(member => {
            return (
              <div className="col-lg-4 mb-4" key={member._id}>
                <div className="card team-card">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-3">
                      <img
                        className="thumb"
                        width="100%"
                        src={member.img.url}
                        alt="steve jobs"
                      />
                    </div>
                    <div
                      className="col-lg-9 col-md-9 col-9 text-center"
                      style={{ marginTop: 12 }}
                    >
                      <span className="name" style={{ fontSize: 20 }}>
                        {member.name}
                      </span>
                      <br />
                      <span className="name">{member.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
