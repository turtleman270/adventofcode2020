const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let passport = ""
  let total = 0;
  let validated = false;

  let round = 1;

  for await (const line of rl) {
    if(line ==""){
      passport = "";
      validated = false;
      round ++;
      continue;
    }
    if(validated){
      continue;
    }

    passport += line + " ";

    const valid =
    passport.match(/byr:(19[2-9]\d |200[0-2] )/) &&
    passport.match(/iyr:(201\d|2020) /) &&
    passport.match(/eyr:(202\d|2030) /) &&
    passport.match(/hgt:(1[5-8]\dcm|19[0-3]cm|59in|6\din|7[0-6]in) /) &&
    passport.match(/hcl:#[0-9a-f]{6} /) &&
    passport.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth) /) &&
    passport.match(/pid:\d{9} /)


    if(valid){
      total++;
      validated = true;
    }
  }

  console.log(total);
}

processLineByLine();
