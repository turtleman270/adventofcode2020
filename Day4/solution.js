const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let keys = new Set();

  let total = 0;
  let validated = false;
  const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  for await (const line of rl) {
    if(line ==""){
      keys = new Set();
      validated = false;
      continue;
    }
    if(validated){
      continue;
    }

    currentKeys = line.match(/.*(?=:.*)/,"")[0].split(/:.*? /)
    // .*  - any characters
    // (?=:.*) - positive lookahead telling it to match but not return :.*
    //this is just to trim off the last value in the line

    currentKeys.forEach(item => keys.add(item))

    const valid = requiredKeys.every(key => keys.has(key));
    if(valid){
      total++;
      validated = true;
    }
  }

  console.log(total);
}

processLineByLine();
