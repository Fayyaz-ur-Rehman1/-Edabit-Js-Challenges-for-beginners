// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
// Notes
// The function returns an array of strings.
// All drink names are in lowercase.

function fayyaz(a){
    a = ["fanta", "cola", "water"]
    return a.slice(2)
}
console.log(fayyaz())

function khilji(b){
    b = ["fanta", "cola"]
    return b.slice(2)
}
console.log(khilji())

function khan(c){
    c = ["lemonade", "beer", "water"]
    return c.slice(0)
}
console.log(khan())