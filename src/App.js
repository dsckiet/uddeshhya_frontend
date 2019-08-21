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
import BloodDonationHome from "./components/BloodDonation/BloodDonationHome";
import DonateBlood from "./components/BloodDonation/DonateBlood";
import RequestBlood from "./components/BloodDonation/RequestBlood";
import Login from "./components/Admin/Auth/Login";
import RegisterDonor from "./components/BloodDonation/RegisterDonor";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Donors from "./components/Admin/BloodDonation/Donors";

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
        <Route exact path="/blood-donation-portal" component={BloodDonationHome} />
        <Route exact path="/request-blood" component={RequestBlood} />
        <Route exact path="/donate-blood" component={DonateBlood} />    
        <Route exact path="/login" render={() => <Login/>}/>
        <Route exact path="/register-as-donor" component={RegisterDonor} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/blood-requests" component={RequestBlood}/>
        <Route exact path="/available-donors" component={Donors}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
