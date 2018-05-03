import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Styles from './Routes.css'

const Routes = () => {
  return (
    <div className={Styles.routesContainer}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Routes;
