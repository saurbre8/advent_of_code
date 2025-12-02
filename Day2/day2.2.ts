import * as fs from 'fs';

const data = fs.readFileSync('./Day2/day2input.txt', 'utf-8');
const ranges: string[] = data.split(',');
let sum = 0;

for (const range of ranges) {
  const rangeParts = range.split('-');
  const start = parseInt(rangeParts[0]);
  const end = parseInt(rangeParts[1]);

  for (let i = start; i <= end; i++) {
    const number = i.toString();
    const length = number.length;
    for (let j = 1; j <= Math.floor(length / 2); j++) {
      if (length % j === 0) {
        const numPart = number.slice(0, j);
        const repeated = numPart.repeat(length / j);
        if (repeated === number) {
          console.log(`Found matching pattern for number ${i}: ${numPart} repeated`);
          sum += i;
          break;
        }
      } 
    }
  }
}
console.log(`Sum of matching halves: ${sum}`);