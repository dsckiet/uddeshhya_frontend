import React, { Component } from "react";
import TopBanner from "../Banner/TopBanner";
import About from "../AboutSection/About";
import SubAbout from "../AboutSection/SubAbout";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import * as apiService from "../../utils/Services";

class Index extends Component {
  state = {
    projects: [],
    team: []
  };
  componentDidMount() {
    apiService.getIndexData().then(data => {
      this.setState({ projects: data.projects, team: data.teamMembers });
    });
  }

  render() {
    return (
      <>
        <TopBanner />
        <About />
        <SubAbout />
        <Projects projects={this.state.projects} />
        <Team team={this.state.team} />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Index;
