// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
// Notes
// Don't forget to return the result.
// See Resources tab for more info.


function concat(arr,b){
    return arr.concat(b)
}
console.log(concat([1, 3, 5], [2, 6, 8]))
console.log(concat([7, 8], [10, 9, 1, 1, 2])) 
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))


function arr(concat,a){
    return concat.concat(a)
}
console.log(arr([1, 3, 5], [2, 6, 8]))
console.log(arr([7, 8], [10, 9, 1, 1, 2])) 
console.log(arr([4, 5, 1], [3, 3, 3, 3, 3]))