import React, { Component } from 'react';
import axios from 'axios';
import Styles from "./Dashboard.css";


export default class Home extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <div className={Styles.hero}>
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}