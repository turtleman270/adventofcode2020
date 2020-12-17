const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let total = 0;

  for await (const line of rl) {
    const split = line.split(" ");
    const bounds = split[0].split("-");
    const left = parseInt(bounds[0])-1;
    const right = parseInt(bounds[1])-1;
    const letter = split[1].substring(0,1);
    const word = split[2];

    total +=
      ((word.charAt(left)==letter)+
      (word.charAt(right)==letter))%2
    }
  console.log(total);
}

processLineByLine();
