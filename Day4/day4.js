"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./Day4/day4input.txt', 'utf-8');
var lines2DArray = data.split('\n').map(function (line) { return line.split(''); });
var sum = 0;
var adjCount = 0;
for (var i = 0; i < lines2DArray.length; i++) {
    for (var j = 0; j < lines2DArray[i].length; j++) {
        adjCount = 0;
        if (lines2DArray[i][j] === '@') {
            for (var di = -1; di <= 1; di++) {
                for (var dj = -1; dj <= 1; dj++) {
                    if (i + di < 0 || i + di >= lines2DArray.length || j + dj < 0 || j + dj >= lines2DArray[i].length) {
                        continue;
                    }
                    if (!(di === 0 && dj === 0) && lines2DArray[i + di][j + dj] === '@') {
                        adjCount++;
                    }
                }
            }
            console.log(adjCount, i, j);
            if (adjCount < 4) {
                sum++;
            }
        }
    }
}
console.log(sum);
