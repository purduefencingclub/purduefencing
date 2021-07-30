import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Join from "./pages/Join";

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/officers" component={Officers} />
      <Route path="/join" component={Join} />
    </Switch>
  </BrowserRouter>
);

export default App;
