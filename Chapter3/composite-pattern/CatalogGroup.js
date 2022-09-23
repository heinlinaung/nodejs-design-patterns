class CatalogGroup {
  constructor(name, composites = []) {
    this.name = name
    this.composites = composites
  }

  get total() {
    //getter : CatalogGroup.total
    return this.composites.reduce((total, nextItem) => total + nextItem.total, 0)
  }

  print() {
    //method : CatalogGroup.print()
    console.log(`\n${this.name.toUpperCase()}`)
    this.composites.map(x => {
      x.print()
    })
  }
}

module.exports = CatalogGroup