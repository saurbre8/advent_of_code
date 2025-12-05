import * as fs from 'fs';

const data = fs.readFileSync('./Day5/day5input.txt', 'utf-8');
const lines = data.split('\n');
let sum = 0;
const ranges: [number, number][] = [];
let onRanges = true;

for (const range of lines) {
  if (onRanges) {
    if (range.trim() === '') {
      onRanges = false;
      continue;
    }
    const rangeParts = range.split('-');
    const start = parseInt(rangeParts[0]);
    const end = parseInt(rangeParts[1]);

    ranges.push([start, end]);
  } else {
    const number = parseInt(range);
    for (const [start, end] of ranges) {
      if (number >= start && number <= end) {
        sum++;
        break; 
      }
    }
  }
}

console.log(`Total fresh ingredients found: ${sum}`);