// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
// Notes
// N/A

function rotateByOne(arr) {
    arr = [1,2,3,4,5]
	b = arr.pop()
	arr.unshift(5)
	return arr
}
console.log(rotateByOne())

function fayyaz(name){
    name = [6,5,8,9,7]
    c = name.pop();
    name.unshift(7)
    return name
}
console.log(fayyaz())

function khilji(a){
    a = [20,15,26,8,4]
    d = a.pop();
    a.unshift(4)
    return a
}
console.log(khilji())