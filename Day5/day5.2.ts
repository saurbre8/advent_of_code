import * as fs from 'fs';

const data = fs.readFileSync('./Day5/day5input2.txt', 'utf-8');
const lines = data.split('\n');
const ranges: [number, number][] = [];

for (const range of lines) {
  const rangeParts = range.split('-');
  const start = parseInt(rangeParts[0]);
  const end = parseInt(rangeParts[1]);
  ranges.push([start, end]);
}

ranges.sort((a, b) => a[0] - b[0]);

let totalIDs = 0;
let lastEnd = 0;

for (const [start, end] of ranges) {
  if (start > lastEnd) {
    totalIDs += end - start + 1;
    lastEnd = end;
  } else if (end > lastEnd) {
    totalIDs += end - lastEnd;
    lastEnd = end;
  }
}

console.log(`Total fresh ingredient IDs: ${totalIDs}`);