import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheets/style.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/AboutSection/About";
import SubAbout from "./components/AboutSection/SubAbout";
import Projects from "./components/Projects/AllProjects";
import SingleProject from "./components/Projects/SingleProject";
import Team from "./components/Team/TeamPage";
import Footer from "./components/Footer/Footer";
import Index from "./components/HomePage/Index";
import VolunteerForm from "./components/Volunteer/VolunteerForm";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Index />} />
        <Route exact path="/about-uddeshhya" component={About} />
        <Route exact path="/ways-to-help" component={SubAbout} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/team" component={Team} />
        <Route eaxct path="/become-a-volunteer" component={VolunteerForm} />
        <Route exact path="/projects/:id" component={SingleProject} />
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
