import Auth from '../../components/Auth/Auth'
import Home from "../Home/Home";
import React from "react";
import Styles from './Main.css'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  return (
    <div  className={Styles.main}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
