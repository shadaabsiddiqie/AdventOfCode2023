const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8');

let time = data.split('\n')[0].split(':')[1].trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(Number);
let distance = data.split('\n')[1].split(':')[1].trim().split(/\s+/)
        .filter(Boolean)
        .map(Number);

let product = 1;

for(let i = 0; i < time.length; i++){
        let tmpSum = 0;
        for(let j = 1; j <=time[i] ; j++){
                // console.log(time[i], distance[i], j, (j + j*(time[i]-j)));
                if((j*(time[i]-j)) > distance[i]) tmpSum++;
                
        }
        console.log(tmpSum);
        product = product *tmpSum;
}

console.log(product);