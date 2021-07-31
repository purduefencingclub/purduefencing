import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Beginner from "./pages/Beginner";
import faq from "./pages/FAQ";
import SignUp from "./pages/SignUp";

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/officers" component={Officers} />
      <Route path="/join" component={Join} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/beginner" component={Beginner} />
      <Route path="/faq" component={faq} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default App;
