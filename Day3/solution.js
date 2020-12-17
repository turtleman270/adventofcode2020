const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let total = 0;
  let pos = 0;

  for await (const line of rl) {
    total+=line.charAt(pos)=="#";
    pos += 3;
    pos %= line.length;
  }
  console.log(total);
}

processLineByLine();
