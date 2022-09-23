var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup.js')
var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup('Shoes and such', [boots, sneakers, flipFlops])
var group_food = new CatalogGroup('Foooood!', [
  new CatalogItem('curry', 3.55),
  new CatalogItem('burger', 3.55),
  new CatalogItem('french fries', 3.55)
])

var keychain = new CatalogItem('kkkkkeychain', .99)

var catalog = new CatalogGroup('All', [keychain, group_shoes, group_food])
console.log(`$${catalog.total}`)
catalog.print()