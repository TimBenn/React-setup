import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from '../About/About'
import Styles from './Routes.css'

const Routes = () => {
  return (
    <div className={Styles.routesContainer}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
