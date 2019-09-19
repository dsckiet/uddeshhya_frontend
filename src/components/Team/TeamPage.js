import React, { Component } from "react";
import * as apiService from "../../utils/Services";
import "./style.css";

class TeamPage extends Component {
  state = {
    team: {
      ngo: [],
      student: []
    }
  };

  componentDidMount() {
    apiService.getTeamData().then(data => {
      let ngo = data.team.filter(member => member.role === "ngo");
      let student = data.team.filter(member => member.role === "student");

      //sorting
      student = this.sortTeam(student);
      ngo = this.sortTeam(ngo);

      this.setState({ team: { ngo, student } });
    });
  }
  sortTeam = team => {
    let roles = [
      "TREASURER",
      "SECRETARY",
      "JOINT-TREASURER",
      "JOINT-SECRETARY",
      "VICE PRESIDENT",
      "PRESIDENT",
      "CHAIRPERSON"
    ];
    let sorted = false;

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < team.length - 1; i++) {
        if (
          roles.indexOf(team[i].position) < roles.indexOf(team[i + 1].position)
        ) {
          let temp = team[i];
          team[i] = team[i + 1];
          team[i + 1] = temp;
          sorted = false;
        }
      }
    }

    return team;
  };

  render() {
    let { ngo, student } = this.state.team;
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
            {ngo.map(member => {
              return (
                <div className="col-lg-4 mb-4" key={member._id}>
                  <div className="card team-card">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <img
                          className="thumb"
                          style={{ maxHeight: "80px" }}
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
              );
            })}

            {student.map(member => {
              return (
                <div className="col-lg-4 mb-4" key={member._id}>
                  <div className="card team-card">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-3">
                        <img
                          className="thumb"
                          width="100%"
                          style={{ maxHeight: "80px" }}
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
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamPage;
