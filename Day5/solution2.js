const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let max = 0;
  const columns = 128;
  const rows = 8;

  const allSeats = new Array();

  for await (const line of rl) {

    let column = 0;
    let row = 0;
    column += line.charAt(0)=='B'?64:0;
    column += line.charAt(1)=='B'?32:0;
    column += line.charAt(2)=='B'?16:0;
    column += line.charAt(3)=='B'?8:0;
    column += line.charAt(4)=='B'?4:0;
    column += line.charAt(5)=='B'?2:0;
    column += line.charAt(6)=='B'?1:0;

    row += line.charAt(7)=='R'?4:0;
    row += line.charAt(8)=='R'?2:0;
    row += line.charAt(9)=='R'?1:0;

    seat = column*8+row;
    allSeats.push(seat);
  }
  allSeats.sort(function(a, b) {
    return a - b;
  });;
  console.log(typeof allSeats[0])
  for (var i = 1; i < allSeats.length; i++) {
    const left = allSeats[i-1];
    const right = allSeats[i];
    if(left+1!=right){
      console.log(left+1);
    }
  }

}

processLineByLine();
