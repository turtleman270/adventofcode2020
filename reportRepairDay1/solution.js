const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const targets = new Set();

  for await (const line of rl) {
    num = parseInt(line)
    const desiredNum = 2020 - num;
    if(targets.has(num)){
      console.log(num*desiredNum);
    }
    targets.add(desiredNum);
  }
}

processLineByLine();
