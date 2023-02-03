// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
// Notes
// No test case will contain punctuation.
// Arrays can be of various lengths.

function fayyaz(a){
    a = ['hello','world']
    return a.map(x => x.length)
}
console.log(fayyaz())

function khan(b){
    b = ["Halloween", "Thanksgiving", "Christmas"]
    return b.map(x => x.length)
}
console.log(khan())

function khilji(a){
 c = ["She", "sells", "seashells", "down", "by", "the", "seashore"]
 return c.map(b => b.length)
}
console.log(khilji())