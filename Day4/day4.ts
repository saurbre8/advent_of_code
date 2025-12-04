import * as fs from 'fs';

const data = fs.readFileSync('./Day4/day4inputspec.txt', 'utf-8');
const lines2DArray = data.split('\n').map(line => line.split(''));
let sum = 0;
let adjCount = 0;

for (let i = 0; i < lines2DArray.length; i++) {
  for (let j = 0; j < lines2DArray[i].length; j++) {
    adjCount = 0;
    if (lines2DArray[i][j] === '@') {
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (i + di < 0 || i + di >= lines2DArray.length || j + dj < 0 || j + dj >= lines2DArray[i].length) {
            continue;
          }
          if (!(di === 0 && dj === 0) && lines2DArray[i + di][j + dj] === '@') {
            adjCount++;
          }
        }
      }
      console.log(adjCount, i, j);
      if (adjCount < 4) {
        sum++;
      }
    }
  }
}
console.log(sum);