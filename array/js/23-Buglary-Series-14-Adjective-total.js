// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4
// Notes
// The list will never be empty (no empty object).

function a(fayyaz){
    fayyaz = {a:'moron'}
    return Object.keys(fayyaz).length
}
console.log(a())

function b(khilji){
    khilji = {a:'idiot', b:'idiot', c:'idiot'}
    return Object.keys(khilji).length
}
console.log(b())

function c(urrehman){
    urrehman = {a:'moron',b:'scumbag',c:'moron',d:'dirtbag'}
    return Object.values(urrehman).length
}
console.log(c())
