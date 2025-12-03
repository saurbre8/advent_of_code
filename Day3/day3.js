"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./Day3/day3input.txt', 'utf-8');
var lines = data.split('\n');
var sum = 0;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var max = 0;
    var joltage = 0;
    for (var i = 0; i < line.length - 1; i++) {
        for (var j = i + 1; j < line.length; j++) {
            if (i !== j) {
                joltage = parseInt(line[i] + line[j]);
                if (joltage > max) {
                    max = joltage;
                }
            }
        }
    }
    console.log("Maximum joltage for line \"".concat(line, "\": ").concat(max));
    sum += max;
}
console.log("Sum of maximum joltages: ".concat(sum));
