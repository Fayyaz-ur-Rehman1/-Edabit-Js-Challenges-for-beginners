// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
// Notes
// Don't forget to return the result.
// See Resources tab for more info.



function fn(x){
    a = [1,3,5];
    x = [2,6,8]
    return a.concat(x)
};
document.write(fn())

document.write("<br>")

function sf(x){
    b = [7,8];
    z = [10,9,1,1,2]
    return b.concat(z)
};
document.write(sf())

document.write("<br>")

function khilji(x){
    c = [4,5,1];
    y = [3,3,3,3,3]
    return c.concat(y)
};
document.write(khilji())