const fs = require('fs');
const text = fs.readFileSync("./input.txt", "utf-8");
const textByLine = text.split('\n');
let currentY = 0
let textLine = 0
let trees = 0
const lineLength = textByLine[0].length - 1
while(textLine < textByLine.length) {
    // console.log(currentY)
    // console.log(Math.ceil(currentY / lineLength))
    let stringToCheck = textByLine[textLine].repeat(Math.ceil(currentY / lineLength))
    let isTree = stringToCheck[currentY] == '#'
    if(isTree) {
        trees++;
    }
    currentY += 1
    textLine += 2
}

console.log(trees)