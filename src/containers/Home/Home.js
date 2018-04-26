import React, { Component } from 'react';
import axios from 'axios';
import Styles from "./Home.css";


export default class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className={Styles.homeContainer}>
        <div className={Styles.hero}>
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}