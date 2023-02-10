// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.

function search(arr1,arr2){
    return arr1.indexOf(arr2);
}

console.log( search([1, 5, 3], 5))
console.log( search([9, 8, 3], 3))
console.log( search([1, 2, 3], 4) )

function arr(search1,search2){
    return search1.findIndex(x => x == search2);
}

console.log( arr([1, 5, 3], 5))
console.log( arr([9, 8, 3], 3))
console.log( arr([1, 2, 3], 4) )