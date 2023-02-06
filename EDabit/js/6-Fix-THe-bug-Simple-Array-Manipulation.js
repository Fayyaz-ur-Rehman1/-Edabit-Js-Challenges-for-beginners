// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefully.

function incrementItems(arr){
    return arr.map(x => x + 1 )
}

console.log( incrementItems([0, 1, 2, 3]))
console.log( incrementItems([2, 4, 6, 8]))
console.log( incrementItems([-1, -2, -3, -4]))

function  arr(incrementItems){
 for (let a = 0 ; a < incrementItems ; a++)
incrementItems [a++]
return incrementItems
}
console.log(arr([0, 1, 2, 3]))
console.log(arr([2, 4, 6, 8]))
console.log(arr([-1, -2, -3, -4]))

function a(b){
    for(let c = 0; c < b; c++)
    b[a] = b[a] + 1
    return b
}
console.log(a([0,1,2,3]))
console.log(a([2,4,6,8]))
console.log(a([-1,-2,-3,-4]))