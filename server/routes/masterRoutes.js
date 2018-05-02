const inventoryRoutes = require('./features/inventory/inventoryRoutes.js');

module.exports = app => {
    inventoryRoutes(app)
  }