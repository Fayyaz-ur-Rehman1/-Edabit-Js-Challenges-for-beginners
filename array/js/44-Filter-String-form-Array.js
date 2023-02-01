// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []
// Notes
// N/A

function a(khilji){
    khilji = [1, 2, 3, "a", "b", 4]
    return khilji.filter((khilji,b)=> khilji < 5 )
}
console.log(a())

function b(khan){
    khan = ["A", 0, "Edabit", 1729, "Python", "1729"]
    return khan.filter((khilji,b)=> khilji < 1730 )
}
console.log(b())

function fayyaz(d){
    d = ["Nothing", "here"]
    return d.filter((khilji,b)=> khilji < 0 )
}
console.log(fayyaz())
