import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home/Home";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Main;
