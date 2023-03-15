// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.

function findIndex(arr,str){
    return arr.indexOf(str)
}
 console.log( findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
 console.log( findIndex(["Red", "blue", "Blue", "Green"], "blue") )
 console.log( findIndex(["a", "g", "y", "d"], "d"))
 console.log( findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))

 function arr(findIndex,a){
    return findIndex.lastIndexOf(a)
 }
 console.log(arr(["hi", "edabit", "fgh", "abc"], "fgh"))
 console.log(arr(["Red", "blue", "Blue", "Green"], "blue") )
 console.log(arr(["a", "g", "y", "d"], "d"))
 console.log(arr(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))

 function b(d,c){
    return d.findIndex(x => x == c)
 }
 console.log(b(["hi", "edabit", "fgh", "abc"], "fgh"))
 console.log(b(["Red", "blue", "Blue", "Green"], "blue") )
 console.log(b(["a", "g", "y", "d"], "d"))
 console.log(b(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
