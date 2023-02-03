// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true
// Notes
// Remember to return either true or false.
// All arrays contain two positive numbers.
// If you're stuck, check the Resources for a hint.

function a(fayyaz){
    fayyaz = [4,8]
    return Math.sqrt(4) === Math.cbrt(8);
}
console.log(a())

function b(khilji){
    khilji = [16,48]
    return Math.sqrt(16) === Math.cbrt(48);
}
console.log(b())

function c(urrehman){
    urrehman = [9,27]
    return Math.sqrt(9) === Math.cbrt(27)
}
console.log(c())