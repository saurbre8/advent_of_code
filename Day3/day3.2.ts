import * as fs from 'fs';
import { start } from 'repl';

const data = fs.readFileSync('./Day3/day3input.txt', 'utf-8');
const lines = data.split('\n');
let joltage = 0;

for (const line of lines) {
  let spotsLeft = 12;
  let startingPos = 0;
  let sum = 0;
  for (let b = 0; b < 12; b++) {
    let maxPos = 0;
    let maxValue = 0;
    for (let i = startingPos; i < line.length - spotsLeft + 1; i++) {
      if (parseInt(line[i]) > maxValue) {
        maxPos = i;
        maxValue = parseInt(line[i]);
      }
    }
    spotsLeft--;
    startingPos = maxPos + 1;
    sum += maxValue * Math.pow(10, spotsLeft);
  }
  console.log(`Maximum joltage for line "${line}": ${sum}`);
  joltage += sum;
}
console.log(`Sum of maximum joltages: ${joltage}`);

// Maximum joltage for line "3233335236243344373353153424245344446623346533333334336343332412352323425333572335343651325253653253": 776555653776
// how tf is it getting that end part