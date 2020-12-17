const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let total1 = 0;
  let total3 = 0;
  let total5 = 0;
  let total7 = 0;
  let totalOther = 0;

  let pos1 = 0;
  let pos3 = 0;
  let pos5 = 0;
  let pos7 = 0;
  let posOther = 0;
  let toggle = true;

  for await (const line of rl) {

    if(toggle){
      totalOther += line.charAt(posOther)=="#";
      posOther += 1;
      posOther %= line.length;
    }
    toggle = !toggle;
    total1+=line.charAt(pos1)=="#";
    total3+=line.charAt(pos3)=="#";
    total5+=line.charAt(pos5)=="#";
    total7+=line.charAt(pos7)=="#";
    pos1 += 1;
    pos3 += 3;
    pos5 += 5;
    pos7 += 7;
    pos1 %= line.length;
    pos3 %= line.length;
    pos5 %= line.length;
    pos7 %= line.length;
  }
  console.log(totalOther*total1*total3*total5*total7);
}

processLineByLine();
