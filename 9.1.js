const fs = require('fs');
const path = require('path');

function nextValOf(seqNum){
    if(seqNum.filter(x => x==0).length == seqNum.length) return 0;
    let newSeqNum = [];
    for(let i = 0; i< seqNum.length-1; i++) newSeqNum.push(seqNum[i+1]-seqNum[i]);
    return nextValOf(newSeqNum) + seqNum[seqNum.length-1];
}

data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf8').split('\n');
let totalSum = 0;
for(let i = 0 ; i < data.length; i ++) totalSum += nextValOf(data[i].split(' ').map(Number));

console.log(totalSum);
