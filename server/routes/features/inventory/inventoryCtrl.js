const Users = require("./Inventory");

module.exports = {
  getInventory(req, res) {
    Users.find(req.query).exec((err, inventory) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(inventory);
    });
  },

  getOneInventoryItem(req, res) {
    Users.findById(req.params.id).exec((err, inventory) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(inventory);
    });
  },

  editInventoryItem(req, res) {
    Users.findByIdAndUpdate(req.params.id, req.body).exec((err, inventory) => {
      if (err) {
        return res.send(err);
      }
      return res.json(inventory);
    });
  },

  deleteInventoryItem(req, res) {
    Users.findByIdAndRemove(req.params.id, req.body).exec((err, inventory) => {
      if (err) {
        return res.send(err);
      }
      return res.json(inventory);
    });
  }
};
