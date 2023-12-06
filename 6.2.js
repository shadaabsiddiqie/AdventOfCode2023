const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8');

let time = data.split('\n')[0].split(':')[1].trim()
        .match(/\d+/g)
        .join('');
let distance = data.split('\n')[1].split(':')[1].trim().match(/\d+/g)
        .join('');

let product = 0;
for(let j = 1; j <=time ; j++) if((j*(time-j)) > distance) product++;

console.log(product);