var Storage = require('./Storage')
class Store {

    constructor(name, inventory = []) {
        this.name = name;

        var floor = new Storage('floor', inventory.floor)
        var backroom = new Storage('backroom', inventory.backroom)
        var localStore = new Storage('localStore', inventory.localStore, 1)
        var warehouse = new Storage('warehouse', inventory.warehouse, 5)

        floor.findNext(backroom)
        backroom.findNext(localStore)
        localStore.findNext(warehouse)

        this.storage = floor
    }

    find(itemName) {
        return this.storage.find(itemName)
    }

}

module.exports = Store;
