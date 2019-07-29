import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheets/style.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/AboutSection/About";
import SubAbout from "./components/AboutSection/SubAbout";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Index from "./components/HomePage/Index";
// import HomePage from "./components/HomePage/HomePage";

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
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
