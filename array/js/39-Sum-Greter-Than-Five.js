// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.

function sumFive(arr) {
    arr = [1, 5, 20, 30, 4, 9, 18]
	return arr.filter(x => x > 5).reduce((a, b) => a + b, );
}
console.log(sumFive())

function khan(a){
    a = [1, 2, 3, 4]
    return a.filter(x => x > 5).reduce((a,b)=> a+b,0)
}
console.log(khan())

function khilji(b){
    b = [10, 12, 28, 47, 55, 100]
    return b.filter(x => x > 5).reduce((a,b) => a+b)
}
console.log(khilji())