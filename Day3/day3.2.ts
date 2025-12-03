import * as fs from 'fs';

const data = fs.readFileSync('./Day3/day3input.txt', 'utf-8');
const lines = data.split('\n');
let sum = 0;

for (const line of lines) {
  let max = 0;
  let joltage = 0;
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i+1; j < line.length; j++) {
      if (i !== j) {
        joltage = parseInt(line[i] + line[j]);
        if (joltage > max) {
          max = joltage;
        }
      }
    }
  }
  console.log(`Maximum joltage for line "${line}": ${max}`);
  sum += max;
}
console.log(`Sum of maximum joltages: ${sum}`);