// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16

function a(fayyaz){
    fayyaz = ('Hello World')
    return fayyaz.lastIndexOf('')
}
console.log(a())

function b(khilji){
    khilji = ('Edabit')
    return khilji.lastIndexOf('')
}
console.log(b())

function c(khan){
    khan = ('wash your hands!')
    return khan.lastIndexOf('')
}
console.log(c())