// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// Notes
// N/A

var a = [1,2,3,4,5,6]
var b = a.toString()
document.write (b)

document.write("<br>")

var c = ['a','b','c','d','e','f']
var d = c.toString()
document.write (d)

document.write("<br>")

var e = [1,2,3,'a','s','daaa']
var f = e.toString()
document.write (f)