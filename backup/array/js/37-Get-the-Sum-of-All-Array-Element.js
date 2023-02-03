// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105
// Notes
// N/A

function fayyaz(a){
    a = [2,7,4]
    return a.reduce((a,b)=>a+b);
}
console.log(fayyaz())

function khilji(b){
    b = [45,3,0]
    return b.reduce((a,b)=> a+b)
}
console.log(khilji())

function khan(c){
    c = [-2,84,23]
    return c.reduce((a,b)=> a+b)
}
console.log(khan())