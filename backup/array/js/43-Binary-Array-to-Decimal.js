// n mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// Examples
// binaryToDecimal([0, 0, 0, 1]) ➞ 1

// binaryToDecimal([0, 0, 1, 0]) ➞ 2

// binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005
// Notes
// // N/A

function binaryToDecimal(arr){
    arr = [0, 0, 0, 1]
    return parseInt(arr.join(""), 2)
  }
  console.log(binaryToDecimal())

  function khilji(a){
    a = [0, 0, 1, 0]
    return parseInt(a.join(""),2 )
  }
  console.log(khilji())


  function khan(b){
    b = [1, 1, 1, 1, 1, 0, 1, 1, 0, 1]
    return parseInt(b.join(""), 2)
  }
  console.log(khan())