import * as fs from 'fs';

function splitStringInHalf(s: string): [string, string] {
  const mid = Math.floor(s.length / 2);
  return [s.slice(0, mid), s.slice(mid)];
}

const data = fs.readFileSync('./Day2/day2input.txt', 'utf-8');
const ranges: string[] = data.split(',');
let sum = 0;

for (const range of ranges) {
  const rangeParts = range.split('-');
  const start = parseInt(rangeParts[0]);
  const end = parseInt(rangeParts[1]);

  for (let i = start; i <= end; i++) {
    const splitString = splitStringInHalf(i.toString());
    const firstHalf = splitString[0];
    const secondHalf = splitString[1];

    if (firstHalf === secondHalf) {
      console.log(`Found matching halves for number ${i}: ${firstHalf} and ${secondHalf}`);
      sum += i;
    }
  }
}
console.log(`Sum of matching halves: ${sum}`);