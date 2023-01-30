// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]
// Notes
// Expect numbers with 0 and 1 .


function integerBoolean(n) {
    return [1,0,0,1,0,1].map(i => i === 1);
}
console.log(integerBoolean())

function fayyaz(a){
    a = [1,0]
    return a.map(x => x === 1)
}
console.log(fayyaz())

function khilji(b){
    b = [0,0,1]
    return b.map(x=>x==1)
}
console.log(khilji())