// // Write a function to reverse an array.

// // Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function reverse(arr){
    return arr.reverse()
}
console.log(reverse([1, 2, 3, 4]) )
console.log(reverse([9, 9, 2, 3, 4]))
console.log(reverse([]))

function arr(reverse){
    const a = []
    reverse.forEach(b => a.unshift(b))
    return a
}
console.log(arr([1,2,3,4]))
console.log(arr([9,9,2,3,4]))
console.log(arr([]))