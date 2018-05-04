import React, { Component } from 'react';
import axios from 'axios';
import Styles from "./Dashboard.css";
import Inventory from '../../components/Inventory/Inventory';


export default class Dashboard extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
          <h1>Dashboard</h1>
          <Inventory />
      </div>
    )
  }
}