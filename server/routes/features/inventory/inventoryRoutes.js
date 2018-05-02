const inventoryCtrl = require('./inventoryCtrl');

module.exports = app => {
    //Get Requests
    app.get('/api/inventory', inventoryCtrl.getInventory);
    app.get('/api/users/:id', inventoryCtrl.getOneInventoryItem);
    //Put Requests
    app.put('/api/users/:id', inventoryCtrl.editInventoryItem);
    //Delete Routes
    app.delete('/api/users/:id', inventoryCtrl.deleteInventoryItem)
};