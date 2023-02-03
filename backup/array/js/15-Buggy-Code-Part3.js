// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15

// sumArray([-1, 0, 1]) ➞ 0

// sumArray([0, 4, 8, 12]) ➞ 24
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

var a = [1, 2, 3, 4, 5]
var b = a.reduce(fayyaz)
function fayyaz(f,s){
    return f + s
}
document.write(b)

document.write("<br>")

var c = [-1, 0, 1]
var d = c.reduce(khan)
function khan(k,g){
    return k + g
}
document.write(d)

document.write("<br>")

var e = [0, 4, 8, 12]
var f = a.reduce(khilji)
function khilji(x,y){
    return x + y
}
document.write(f)