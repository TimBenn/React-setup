import React, { Component } from 'react';
import axios from 'axios';

export class Inventory extends Component {
    state = {
        inventory: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/inventory`)
            .then(res => {
                const inventory = res.data;
                this.setState({ inventory });
            })
    }
    render() {
        return (
            <div>
                {this.state.inventory.map(inventoryItem =>
                    <div key={inventoryItem._id}>
                        <h1>{inventoryItem.plant.toUpperCase()}</h1><img src={inventoryItem.photo} />
                    </div>
                )}
            </div>
        )
    }
}

export default Inventory
