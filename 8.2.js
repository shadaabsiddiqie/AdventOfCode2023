const path = require('path');
const fs = require('fs');

function gcd(a, b) { 
    if (b == 0) return a; 
    return gcd(b, a % b); 
} 
function findlcm(arr, n) { 
    let ans = arr[0]; 
    for (let i = 1; i < n; i++) 
        ans = (((arr[i] * ans)) / (gcd(arr[i], ans))); 
    return ans; 
} 

data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8').split('\n');
directions = data[0];
dirlenght = data[0].length-1;

data = data.splice(2);
let mapPath = {};
let currentVal = [];
data.forEach(val => {
    mapPath[val.split(' = ')[0]] = {};
    mapPath[val.split(' = ')[0]]['L'] = val.split(' = ')[1].split(',')[0].slice(1);
    mapPath[val.split(' = ')[0]]['R'] = val.split(' = ')[1].split(',')[1].trim().slice(0,-1);
    if(val.split(' = ')[0][val.split(' = ')[0].length-1]=='A') currentVal.push(val.split(' = ')[0]);
})

let currentValCount = Array(currentVal.length).fill(0);
for(let j = 0 ; j< currentVal.length; j++){
    while(currentVal[j][currentVal[j].length-1]!='Z'){
        currentVal[j] =  mapPath[currentVal[j]][directions[currentValCount[j]%dirlenght]];
        currentValCount[j]++;
    }
}

console.log(findlcm(currentValCount, currentValCount.length));