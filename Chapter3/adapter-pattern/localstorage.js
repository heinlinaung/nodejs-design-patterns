const { writeFile, unlink, readFileSync, existsSync } = require('fs')
var filename = 'localstorage.json'
class LocalStorage {
  constructor(baseItem) {
    if (existsSync(filename)) {
      var txt = readFileSync(filename)
      this.items = JSON.parse(txt)
    } else {
      this.items = {}
    }
  }

  get length() {
    return Object.keys(this.items).length
  }

  getItem(key) {
    return this.items[key]
  }

  setItem(key, value) {
    this.items[key] = value
    writeFile(filename, JSON.stringify(this.items), err => {
      if (err)
        console.err(err)
    })
  }
  clear() {
    this.items = {}
    unlink(filename, () => {
      console.log('removed localstorage.json')
    })
  }
}
module.exports = new LocalStorage()