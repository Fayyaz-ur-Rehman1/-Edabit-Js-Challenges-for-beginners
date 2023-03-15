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

function drop(arr, b){
  return arr.slice(b)
}
console.log(drop([1, 2, 3], 1))
console.log(drop([1, 2, 3], 2)) 
console.log(drop([1, 2, 3], 5))
console.log(drop([1, 2, 3], 0)) 

function arr(drop,c){
  for(const a = 0 ; a < c ; a++)
  drop.shift();
  return drop;
}
console.log(drop([1, 2, 3], 1))
console.log(drop([1, 2, 3], 2))
console.log(drop([1, 2, 3], 5))
console.log(drop([1, 2, 3], 0))

function dropped(ary,d){
    return ary.splice(d)
}
console.log(dropped([1,2,3],1))
console.log(dropped([1,2,3],2))
console.log(dropped([1,2,3],5))
console.log(dropped([1,2,3],0))