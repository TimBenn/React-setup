import React, { Component } from "react";
import axios from "axios";

export class Inventory extends Component {
  state = {
    inventory: []
  };

  componentDidMount() {
    axios.get(`/inventory`).then(res => {
      const inventory = res.data;
      this.setState({ inventory });
    });
  }

  render() {
    return (
      <div>
        <ul>{this.state.inventory.map(person => <li>{inventory.name}</li>)}</ul>
      </div>
    );
  }
}

export default Inventory;
