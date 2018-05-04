const inventoryCtrl = require('./inventoryCtrl');

module.exports = app => {
    //Get Requests
    app.get('/api/inventory', inventoryCtrl.getInventory);
    app.get('/api/inventory/:id', inventoryCtrl.getOneInventoryItem);
    // POST Request
    app.post('/api/inventory/', inventoryCtrl.createInventoryItem);
    //Put Requests
    app.put('/api/inventory/:id', inventoryCtrl.editInventoryItem);
    //Delete Routes
    app.delete('/api/inventory/:id', inventoryCtrl.deleteInventoryItem)
};