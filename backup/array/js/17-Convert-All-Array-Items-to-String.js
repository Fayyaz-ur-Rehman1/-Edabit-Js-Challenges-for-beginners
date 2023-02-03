// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// parseArray([]) ➞ []
// Notes
// Return [] if array is empty.

function parseArray(khilji){
    khilji =[1,2,'a','b']
    return khilji.map(String)
}
document.write(parseArray())

document.write("<br>")

function fayyaz(k){
    k =['abc',123,'def','456']
    return k.map(String)
}
document.write(fayyaz())

document.write("<br>")

function danish(khan){
    khan =[1,2,'a','b']
    return khan.map(String)
}
document.write(danish())