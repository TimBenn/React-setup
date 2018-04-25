import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Styles from './Main.css'

const Main = () => {
  return (
    <div className={Styles.main}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
