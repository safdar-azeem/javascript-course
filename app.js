let todos = ["a", "b", "c", "d", "e"]

// const removedValue = todos.pop()

// console.log(todos)
// console.log(removedValue)

/////////////////////////////////   splice()

// remove
// todos.splice(1, 2)

// remove all after 1
// todos.splice(1)

// add
// todos.splice(1,0,'s')

// update
// todos.splice(1, 1, "p")

// console.log(todos)

/////////////////////////////////   slice()

// slice todos from index 1 to index 2
// let copyElement = todos.slice(1, 2)

// slice todos from index 1 to the end
// let copyElement = todos.slice(1)

// slice todos from end of array
let copyElement = todos.slice(-2)

console.log(todos)
console.log(copyElement)
