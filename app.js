// 1 create a function called removeTodos
// 2 that will take todos
// 3 and a index of an element to remove as arguments
// 4 and return a new array of todos without the element at the index.

// let letters = ["a", "b", "c", "d", "e"]

// const findIndex = (array, el) => {
// 	return array.indexOf(el)
// }

// let index = findIndex(letters, "b")

// const removeTodos = (array, index) => {
// 	array.splice(index, 1)
// 	return array
// }

// console.log(removeTodos(letters, index))

////////////////////////////// forEach()
// it will loop through an array and execute a function on each element

let letters = ["a", "b", "c", "d", "e"]

letters.forEach((element, index, array) => {
	console.log(element, index, array)
})

////////////////////////////// findIndex()
// it will return the index of the first element that satisfies the provided testing function. Otherwise, it returns -1, indicating that the value was not found.
let numbers = [1, 6, 2, 3, 4, 5, 6, 7]

let index = numbers.findIndex((element) => {
	return element > 4
})

////////////////////////////// find()
// it will return the value of the first element that satisfies the provided testing function. Otherwise, it returns undefined, indicating that the value was not found.
let element = numbers.find((element) => {
	return element > 4
})

console.log(index)
console.log(element)
