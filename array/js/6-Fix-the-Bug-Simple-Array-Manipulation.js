// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefull

var a = [0,1,2,3]
var b = a.map(x => x+1)
document.write(b)

document.write("<br>")

var c = [2,4,6,8]
var d = c.map(x => x+1)
document.write(d)

document.write("<br>")

var e = [-1,-2,-3,-4]
var f = e.map(x => x+1)
document.write(f)

document.write("<br>")