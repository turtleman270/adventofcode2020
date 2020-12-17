const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  let max = 0;
  for await (let line of rl) {
    line = line.replace(/(B|R)/g, "1").replace(/(F|L)/g, "0");
    seat = parseInt(line, 2);

    max = seat>max?seat:max;
  }

  console.log(max);
}

processLineByLine();
