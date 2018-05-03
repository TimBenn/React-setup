const Users = require("./Inventory");

module.exports = {
  getInventory(req, res) {
    Inventory.find(req.query).exec((err, inventory) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(inventory);
    });
  },

  getOneInventoryItem(req, res) {
    Inventory.findById(req.params.id).exec((err, inventory) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(inventory);
    });
  },

  editInventoryItem(req, res) {
    Inventory.findByIdAndUpdate(req.params.id, req.body).exec((err, inventory) => {
      if (err) {
        return res.send(err);
      }
      return res.json(inventory);
    });
  },

  deleteInventoryItem(req, res) {
    Inventory.findByIdAndRemove(req.params.id, req.body).exec((err, inventory) => {
      if (err) {
        return res.send(err);
      }
      return res.json(inventory);
    });
  }
};
