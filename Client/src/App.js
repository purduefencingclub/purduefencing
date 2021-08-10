import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Index from "./pages/Index";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Beginner from "./pages/Beginner";
import faq from "./pages/FAQ";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import Post from "./pages/Post";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/admin";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/officers" component={Officers} />
        <Route path="/join" component={Join} />
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />
        <Route path="/beginner" component={Beginner} />
        <Route path="/faq" component={faq} />
        <Route path="/post/:id" component={Post} />

        <Route path="/sign-up" component={SignUp} />
        <Route path="/admin" component={Admin} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
