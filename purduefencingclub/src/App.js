import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
