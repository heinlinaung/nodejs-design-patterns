class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }

}
class GoldInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`
        this.price = 1000 + baseItem.price
    }

    print() {
        console.log(`${this.name} is made of gold. XD`)
    }

}
class DiamondInventoryItem {

    constructor(baseItem) {
        this.name = `Diamon ${baseItem.name}`
        this.price = 1500 + baseItem.price
        this.cutGlass = true
    }

    print() {
        console.log(`${this.name} costs a lot of money. XD`)
    }

}

module.exports = { InventoryItem, GoldInventoryItem, DiamondInventoryItem };
