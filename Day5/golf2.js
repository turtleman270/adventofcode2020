const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let min = Infinity;
  let max = 0;
  let sum = 0;
  for await (let line of rl) {
    line = line.replace(/(B|R)/g, "1").replace(/(F|L)/g, "0");
    seat = parseInt(line, 2);
    sum += seat;
    max = seat>max?seat:max;
    min = seat<min?seat:min;
  }
  const missing = (max-min+1)*(min + max)/2 - sum
  console.log(missing);
}

processLineByLine();
