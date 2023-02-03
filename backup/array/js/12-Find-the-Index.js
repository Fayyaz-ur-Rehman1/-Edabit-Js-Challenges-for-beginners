// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.

function findtheIndex(f){
    f = ['hi','edabit','fgh','abc']
    return f.indexOf('fgh')
}
document.write(findtheIndex())

document.write("<br>")

var b = ['Red','blue','Blue','green']
function fayyaz(khan){
    return b.indexOf('blue')
}
document.write(fayyaz())

document.write("<br>")

function khilji(sf){
    sf = ["a", "g", "y", "d"]
    return sf.indexOf("d")
}
document.write(khilji())

document.write("<br>")

function danish(v){
    v = ["Pineapple", "Orange", "Grape", "Apple"]   
    return v.indexOf("Pineapple")
}
document.write(danish())