"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('./Day5/day5input2.txt', 'utf-8');
var lines = data.split('\n');
var ranges = [];
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var range = lines_1[_i];
    var rangeParts = range.split('-');
    var start = parseInt(rangeParts[0]);
    var end = parseInt(rangeParts[1]);
    ranges.push([start, end]);
}
ranges.sort(function (a, b) { return a[0] - b[0]; });
var totalIDs = 0;
var lastEnd = 0;
for (var _a = 0, ranges_1 = ranges; _a < ranges_1.length; _a++) {
    var _b = ranges_1[_a], start = _b[0], end = _b[1];
    if (start > lastEnd) {
        totalIDs += end - start + 1;
        lastEnd = end;
    }
    else if (end > lastEnd) {
        totalIDs += end - lastEnd;
        lastEnd = end;
    }
}
console.log("Total fresh ingredient IDs: ".concat(totalIDs));
