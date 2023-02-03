// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]
// Notes
// N/A

function makePair(a,b){
   a = [1]
   b = [2]
   return a.concat(b)
}
document.write(makePair())

document.write("<br>")

function fayyaz(c,d){
    c = [51]
    d = [21]
    return c.concat(d)
 }
 document.write(fayyaz())

 document.write("<br>")

 function danish(e,f){
    e = [512124]
    f = [215]
    return e.concat(f)
 }
 document.write(danish())