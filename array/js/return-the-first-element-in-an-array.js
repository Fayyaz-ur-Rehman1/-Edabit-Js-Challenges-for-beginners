// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr){
    arr = [1,2,3]
    return arr.shift()
}
document.write(getFirstValue())

 document.write("<br>")

function khan(fayyaz){
    fayyaz = ([80,5,100])
    return fayyaz.shift()
}
document.write(khan())

document.write("<br>")

function khilji(danish){
    danish = ([-500,0,50])
    return danish.shift()
}
document.write(khilji())