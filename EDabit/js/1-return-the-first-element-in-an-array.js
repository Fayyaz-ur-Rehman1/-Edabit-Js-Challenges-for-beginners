// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr){
    return arr.at(0)
   }
   console.log( getFirstValue([1, 2, 3]))
   console.log( getFirstValue([80, 5, 100])) 
   console.log( getFirstValue([-500, 0, 50])) 

   function arr(getFirstValue){
   return getFirstValue.index(0)
   }
console.log(getFirstValue([1, 2, 3])) 
console.log(getFirstValue([80, 5, 10])) 
console.log(getFirstValue([-500, 0, ]))
   
function b(a){
    return a.shift()
    }
 console.log(b([1, 2, 3]))
 console.log(b([80, 5, 10]))
 console.log(b([-500, 0, ]))



function e(f){
    return f.slice(0,1)
}
console.log(e([1, 2, 3]))
console.log(e([80, 5, 100]))
console.log(e([-500, 0, 50]))

function g(h){
    return h.splice(0,1)
}
console.log(g([1, 2, 3]))
console.log(g([80, 5, 100]))
console.log(g([-500, 0, 50]))

 