import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Main;
