// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function a(khilji){
    khilji = [1,2,3,4,5]
    return khilji.map(x=>x ? -x :1)
}
console.log(a())

function b(khan){
    khan = [1,-2,3,-4,5]
    return khan.map(x=>x ? -x:0)
}
console.log(b())

function c(chouhan){
    chouhan = []
    return chouhan.map(x => x ? -x:0)
}
console.log(c())