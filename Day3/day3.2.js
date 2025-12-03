"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./Day3/day3input.txt', 'utf-8');
var lines = data.split('\n');
var joltage = 0;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var spotsLeft = 12;
    var startingPos = 0;
    var sum = 0;
    for (var b = 0; b < 12; b++) {
        var maxPos = 0;
        var maxValue = 0;
        for (var i = startingPos; i < line.length - spotsLeft + 1; i++) {
            if (parseInt(line[i]) > maxValue) {
                maxPos = i;
                maxValue = parseInt(line[i]);
            }
        }
        spotsLeft--;
        startingPos = maxPos + 1;
        sum += maxValue * Math.pow(10, spotsLeft);
    }
    console.log("Maximum joltage for line \"".concat(line, "\": ").concat(sum));
    joltage += sum;
}
console.log("Sum of maximum joltages: ".concat(joltage));
// Maximum joltage for line "3233335236243344373353153424245344446623346533333334336343332412352323425333572335343651325253653253": 776555653776
// how tf is it getting that end part
