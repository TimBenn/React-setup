import React, { Component } from "react";
import axios from "axios";
import Styles from "./inventory.css";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Item from "./InventoryItem/InventoryItem";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

export class Inventory extends Component {
  state = {
    inventory: []
  };

  componentDidMount() {
    axios.get(`/api/inventory`).then(res => {
      const inventory = res.data;
      this.setState({ inventory });
    });
  }
  render() {
    return (
      <div>
        {this.state.inventory.map(inventoryItem => (
          <Item
            className={Styles.inventoryItem}
            key={inventoryItem._id}
            plant={inventoryItem.plant}
            price={inventoryItem.price}
            image={inventoryItem.photo}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;
