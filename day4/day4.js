const fs = require('fs');
const text = fs.readFileSync("./input.txt", "utf-8");
const textByLine = text.split('\n');

for(let i = 0; i < textByLine.length - 1; i++) {
    const newest = textByLine[i]
}