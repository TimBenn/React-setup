import Auth from '../../components/Auth/Auth'
import Dashboard from "../Dashboard/Dashboard";
import React from "react";
import Styles from './Routes.css'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className={Styles.main}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Main;
