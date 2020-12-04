const fs = require('fs');
const text = fs.readFileSync("./input.txt", "utf-8");
const textByLine = text.split('\n');

const mappedLines = textByLine.map((line) => {
    return {
        min: line.split('-')[0],
        max: line.split('-')[1].split(' ')[0],
        letter: line.split(' ')[1].split(':')[0],
        string: line.split(': ')[1]
    }
})

const answer1 = mappedLines.reduce((prev, curr) => {
    const {min, max, letter, string } = curr
    const occurences = string.split(letter).length - 1 
    const matched = occurences >= min && occurences <= max
    if(matched) {
        prev++
    }
    return prev
}, 0)

const answer2 = mappedLines.reduce((prev, curr) => {
    const {min, max, letter, string } = curr
    const passes = [string[min - 1], string[max - 1]].filter((str) => str == letter).length == 1
    if(passes) {
        prev++
    }
    return prev
}, 0)

console.log(answer2);