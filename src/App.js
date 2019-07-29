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
import TopBanner from "./components/Banner/TopBanner";
import About from "./components/AboutSection/About";
import SubAbout from "./components/AboutSection/SubAbout";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
// import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Navbar />
        
        {/* <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />         */}
      </Switch>
      <TopBanner/>
      <About/>
      <SubAbout/>
      <Projects/>
      <Team/>
      <Footer/>
    </Router>
  );
};

export default App;
