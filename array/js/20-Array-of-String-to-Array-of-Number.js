// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.

function khilji(){
    g = ['1','3','3.6']
    return g.map(Number)
}
document.write(khilji())

document.write("<br>")

function khan(){
    h = ["9.4", "4.2"]
    return h.map(Number)
}
document.write(khan())

document.write("<br>")

function shan(j){
    j = ["91","44"]
    return j.map(Number)
}
document.write(shan())

document.write("<br>")

function khan(i){
    j = ["9.5", "8.8"]
    return j.map(Number)
}
document.write(khan())
