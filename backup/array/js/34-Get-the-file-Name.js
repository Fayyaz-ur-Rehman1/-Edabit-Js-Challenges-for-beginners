// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"
// Notes
// Tests will include both absolute and relative paths.
// For simplicity, all paths will include forward slashes.

function fayyaz(a){
    a = ("C:/Projects/pil_tests/ascii/edabit.txt")
    return a.slice(28)
}
console.log(fayyaz())

function khilji(b){
    b = ("C:/Users/johnsmith/Music/Beethoven_5.mp3")
    return b.slice(25)
}
console.log(khilji())

function khan(c){
    c = ("ffprobe.exe")
    return c.slice(0)
}
console.log(khan())