// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples

function returnType(a){
    a = [1,2,"null",[]]
    return a.map(b => typeof b)
}
document.write(returnType())

document.write("<br>")

function fayyaz(f){
    f = ["214",true,false,2,2.15,[],null]
    return f.map(s => typeof s )
}
document.write(fayyaz())

document.write("<br>")

function khilji(h){
    h = [21.1,'float','array',['i am array'],null,true,214]
    return h.map(g => typeof g)
}
document.write(khilji())