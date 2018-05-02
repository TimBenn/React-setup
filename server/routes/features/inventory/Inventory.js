const mongoose = require('mongoose');

const Inventory = new mongoose.Schema( {
    plant: String,
    price: Number,
    creationDate: {type: Date, default: Date.now},
    photo: String,
    available: Boolean,
});

module.exports = mongoose.model("Inventory", Inventory);