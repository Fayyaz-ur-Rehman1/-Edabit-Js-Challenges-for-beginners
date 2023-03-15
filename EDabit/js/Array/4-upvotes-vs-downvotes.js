// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
// Notes
// You can expect only positive integers for vote counts.

function getVoteCount(obj){
    return obj.upvotes - obj.downvotes
}

console.log( getVoteCount({ upvotes: 13, downvotes: 0 })) 
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))

function obj(getVoteCount){
   const a = {upvotes,downvotes} = getVoteCount
   return upvotes - downvotes
}
console.log(obj({ upvotes: 13, downvotes: 0 }))
console.log(obj({ upvotes: 2, downvotes: 33 }))
console.log(obj({ upvotes: 132, downvotes: 132}))

function a(b){
     return b['upvotes'] - b['downvotes']
}
console.log(a({ upvotes: 13, downvotes: 0 }))
console.log(a({ upvotes: 2, downvotes: 33 }))
console.log(a({ upvotes: 132, downvotes: 132}))