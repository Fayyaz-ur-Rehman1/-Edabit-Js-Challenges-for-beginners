// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15

// sumArray([-1, 0, 1]) ➞ 0

// sumArray([0, 4, 8, 12]) ➞ 24
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

function sumArray(arr){
    return arr.reduce((a,b)=> a+b)
}
console.log( sumArray([1, 2, 3, 4, 5]))
console.log( sumArray([-1, 0, 1]))
console.log( sumArray([0, 4, 8, 12]))

function arr(sumArray){
    return sumArray.map(x=>x+x)
}
console.log( sumArray([1, 2, 3, 4, 5]))
console.log( sumArray([-1, 0, 1]))
console.log( sumArray([0, 4, 8, 12]))

