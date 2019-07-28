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
// import HomePage from "./components/HomePage/HomePage";
// import Login from "./components/Authentication/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Navbar />
        {/* <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />         */}
      </Switch>
    </Router>
  );
};

export default App;
