import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
// import DonateBlood from "./components/BloodDonation/DonateBlood";
import RequestBlood from "./components/BloodDonation/RequestBlood";
import Login from "./components/Admin/Auth/Login";
import RegisterDonor from "./components/BloodDonation/RegisterDonor";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Donation from "./components/Donation/Donation";
import DonationGateway from "./components/Donation/DonationGateway";
import { AuthContext } from "./contexts/AuthProvider";
import NotFound from "./components/404/NotFound";
import UnAuth from "./components/404/Unauth";
import Donors from "./components/Admin/BloodDonation/Donors";
import Requests from "./components/Admin/BloodDonation/Requests";
import Users from "./components/Admin/Auth/Users/Users";
import ManageProjects from "./components/Admin/Projects/ManageProjects";
import Teams from "./components/Admin/Teams/Teams";
import MoneyDonations from "./components/Admin/Money Donations/MoneyDonations";
import Applications from "./components/Admin/Volunteer Applications/Applications";
import AddUser from "./components/Admin/Auth/Users/AddUser";
import AddProject from "./components/Admin/Projects/AddProject";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about-uddeshhya" component={About} />
        <Route exact path="/ways-to-help" component={SubAbout} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/team" component={Team} />
        <Route eaxct path="/become-a-volunteer" component={VolunteerForm} />
        <Route exact path="/projects/:id" component={SingleProject} />
        <Route
          exact
          path="/blood-donation-portal"
          component={BloodDonationHome}
        />
        <Route exact path="/request-blood" component={RequestBlood} />
        {/* <Route exact path="/donate-blood" component={DonateBlood} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register-as-donor" component={RegisterDonor} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/donate-now" component={Donation} />
        <Route exact path="/payment/confirm" component={DonationGateway} />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/admin"
          component={Dashboard}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/available-donors"
          component={Donors}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/blood-requests"
          component={Requests}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/volunteer-applications"
          component={Applications}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/manage-users"
          component={Users}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/manage-projects"
          component={ManageProjects}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/manage-teams"
          component={Teams}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/money-donations"
          component={MoneyDonations}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/add-user"
          component={AddUser}
        />
        <ProtectedRoute
          userRole={["admin"]}
          exact
          path="/add-project"
          component={AddProject}
        />
        <Route path="/unauthorized" component={UnAuth} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ component: Component, userRole, ...rest }) => {
  const Auth = useContext(AuthContext);
  if (userRole !== undefined) {
    return (
      <Route
        {...rest}
        render={props =>
          Auth.token !== "" && userRole.indexOf(Auth.user.role) !== -1 ? (
            <Component {...props} />
          ) : (
            <Redirect to="/unauthorized" />
          )
        }
      />
    );
  }
  return (
    <Route
      {...rest}
      render={props =>
        Auth.token !== "" ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;
