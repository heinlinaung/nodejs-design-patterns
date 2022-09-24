class Storage {

  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name
    this.inventory = inventory
    this.deliveryTime = deliveryTime
    this.next = null
  }

  findInInventory(itemName) {
    var index = this.inventory.map(x => x.name).indexOf(itemName)
    return this.inventory[index]
  }

  findNext(storage) {
    this.next = storage
  }

  find(itemName) {
    var found = this.findInInventory(itemName)
    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this.name,
        deliveryTime: this.deliveryTime === 0 ? 'now' : `${this.deliveryTime} day(s)`,
      }
    } else if (this.next) {
      return this.next.find(itemName)
    } else {
      return `we do no have this item ${itemName}`
    }
  }

}

module.exports = Storage