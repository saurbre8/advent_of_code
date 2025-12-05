"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./Day5/day5input.txt', 'utf-8');
var lines = data.split('\n');
var sum = 0;
var ranges = [];
var onRanges = true;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var range = lines_1[_i];
    if (onRanges) {
        if (range.trim() === '') {
            onRanges = false;
            continue;
        }
        var rangeParts = range.split('-');
        var start = parseInt(rangeParts[0]);
        var end = parseInt(rangeParts[1]);
        ranges.push([start, end]);
    }
    else {
        var number = parseInt(range);
        for (var _a = 0, ranges_1 = ranges; _a < ranges_1.length; _a++) {
            var _b = ranges_1[_a], start = _b[0], end = _b[1];
            if (number >= start && number <= end) {
                sum++;
                break;
            }
        }
    }
}
console.log("Total fresh ingredients found: ".concat(sum));
