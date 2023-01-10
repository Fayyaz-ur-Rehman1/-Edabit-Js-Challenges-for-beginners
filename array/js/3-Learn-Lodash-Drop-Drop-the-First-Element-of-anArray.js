// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]

// drop([1, 2, 3], 2) ➞ [3]

// drop([1, 2, 3], 5) ➞ []

// drop([1, 2, 3], 0) ➞ [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

var a = [1,2,3]
document.write( a.slice(1))

document.write("<br>")

var a = [1,2,3]
document.write( a.slice(2))

document.write("<br>")

var a = [1,2,3]
document.write( a.slice(5))

document.write("<br>")

var a = [1,2,3]
document.write( a.slice(0))