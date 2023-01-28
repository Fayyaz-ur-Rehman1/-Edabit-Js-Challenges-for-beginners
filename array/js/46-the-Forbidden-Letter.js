// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false

// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

// forbiddenLetter("m", []) ➞ true
// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty 

function a(fayyaz){
    a = ["rock", "paper", "scissors"]
    return a.includes("r")
}
console.log(a())

function c(c){
    b = ["spoon", "fork", "knife"]
    return b.includes("spoon")
}
console.log(c())

function f(s){
    s = ["m"]
    return s.includes("m")
}
console.log(f())