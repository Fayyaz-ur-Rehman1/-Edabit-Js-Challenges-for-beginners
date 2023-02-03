// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
// Notes
// N/A

function a(fayyaz){
    fayyaz = [2,5,3]
    return fayyaz.map(x => x + x)
}
console.log(a())

function b(khilji){
    khilji = [1,86,5]
    return khilji.map(x => x + x)
}
console.log(b())

function c(khan){
    khan = [5,382,0]
    return khan.map(x => x + x)
}
console.log(c())