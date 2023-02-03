// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"
// Notes
// N/A

function evenOrOdd(arr) {
	arr = [0]
	return arr % 2 === 0 ? 'even' : 'odd'
}
console.log(evenOrOdd())

function fayyaz(khilji){
    khilji = [1]
    return khilji % 2 === 0 ? 'even' : 'odd'
    
}
console.log(fayyaz())

function chouhan(danish){
    danish = []
    return danish % 2 === 0? 'even':'odd'
}
console.log(chouhan())

function khan(uzair){
    uzair = 0,1,5
    return uzair % 2 === 0 ? 'even': 'odd'
}
console.log(khan())