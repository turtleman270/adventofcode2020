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
    const lower = parseInt(bounds[0]);
    const upper = parseInt(bounds[1]);
    const letter = split[1].substring(0,1);
    const word = split[2];

    let numLetters = 0;
    for (var i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      numLetters += c==letter ? 1 : 0;
    }

    if(numLetters>=lower && numLetters<=upper){
      total++;
    }
  }
  console.log(total);
}

processLineByLine();
