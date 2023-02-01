// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
// rangeOfNum(2, 4) ➞ [3]

// rangeOfNum(5, 9) ➞ [6, 7, 8]

// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]
// Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.

function rangeOfNum(start, end) {
	let newArr = [5,9]
	if(start == end) return newArr
	for(let x=start+1; x<end; x++){
		newArr.push(x)
	}
	return newArr
}
console.log(rangeOfNum())