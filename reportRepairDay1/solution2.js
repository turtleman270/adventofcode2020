const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const targets = new Array();

  for await (const line of rl) {
    num = parseInt(line)
    targets.push(num);
  }
  targets.sort((a, b) => a - b)

  const goal = 2020;
  var times = 0;
  for( var i=0; i < targets.length; i++) {
    for( var j=i+1; j < targets.length; j++) {
      sum1 = targets[i] + targets[j];
      if (sum1 > goal) break;
      for( var k=j+1; k < targets.length; k++) {
        if(sum1+targets[k] == goal){
          console.log(targets[i] * targets[j] * targets[k])
        }
      }
    }
  }

  return targets;
}

processLineByLine();
