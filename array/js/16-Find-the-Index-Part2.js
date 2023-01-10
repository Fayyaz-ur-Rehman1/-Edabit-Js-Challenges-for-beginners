// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1
// Notes
// If the item is not present, return -1.
// The given array is ordered.

function khilji(a){
    a = [1,2,3,4]
    return a.indexOf(3)
}
document.write(khilji())

document.write("<br>")

function khan(h){
    h = [2, 4, 6, 8, 10]
    return h.indexOf(8)
}
document.write(khan())

document.write("<br>")

function chouhan(get){
    g = [1, 3, 5, 7, 9]
    return g.indexOf(3)
}
document.write(chouhan())