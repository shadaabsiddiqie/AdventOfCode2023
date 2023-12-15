const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8').split('\n');
directions = data[0];
dirlenght = data[0].length-1;

data = data.splice(2);
let mapPath = {};
data.forEach(val => {
    mapPath[val.split(' = ')[0]] = {};
    mapPath[val.split(' = ')[0]]['L'] = val.split(' = ')[1].split(',')[0].slice(1);
    mapPath[val.split(' = ')[0]]['R'] = val.split(' = ')[1].split(',')[1].trim().slice(0,-1);
})

let count = 0;
let currentVal = 'AAA';
while(currentVal != 'ZZZ'){
    previousVal = currentVal;
    currentVal = mapPath[previousVal][directions[count%dirlenght]];
    count++;
}
console.log(count);