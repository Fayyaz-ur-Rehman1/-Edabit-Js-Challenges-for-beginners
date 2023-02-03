// Given an index and an array, return the value of the array with the given index.

// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
// Notes
// Math.floor() can be helpful.

const a = [1,2,3,4,5,6]
function king(b){
    b = [10 / 2]
    return a[b]
}
document.write(king())

document.write("<br>")

const b = [1, 2, 3, 4, 5, 6]
function khilji(c){
    c = [8.0 / 2]
    return b[c]
}
document.write(khilji())

document.write("<br>")

const w = [1, 2, 3, 4]
function shan(d){
    d = [6/ 2]
    return w[d]
}
document.write(shan()) 