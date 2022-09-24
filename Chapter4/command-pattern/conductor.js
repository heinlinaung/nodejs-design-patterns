class Conductor {
  constructor() {
    this.history = []
    this.undone = []
  }
  run(command) {
    console.log(`executing command : ${command.name}`)
    command.execute()
    this.history.push(command)
  }

  printHistory() {
    this.history.forEach(x => console.log(x.name))
  }

  undo() {
    var command = this.history.pop()
    console.log(`undo ${command.name}`)
    command.undo()
    this.undone.push(command)
  }

  redo() {
    var command = this.undone.pop()
    console.log(`redo ${command.name}`)
    command.execute()
    this.history.push(command)
  }
}
module.exports = new Conductor()