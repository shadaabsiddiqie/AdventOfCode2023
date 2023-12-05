const fs = require('fs');
const path = require('path');

function cmp(i, j, matrix){
    if(matrix[i][j] =='*') {
        return `${i}|${j}`;
    }
    return false;
}
function isValidChar(i, j, m, set){
    let ans = [cmp(i+1,j,m), cmp(i+1,j+1,m), cmp(i+1,j-1,m), cmp(i-1,j,m), cmp(i-1,j+1,m), cmp(i-1,j-1,m),
    cmp(i,j+1,m),cmp(i,j-1,m)];
    for(let k = 0; k< ans.length; k++){
        if(ans[k]) {
            set.add(ans[k]);
        }
    }
    return set;
}

let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8');
data = data.split('\n');

for(let i = 0; i< data.length ; i++)data[i] = `.${data[i].split('\r')[0]}.`;
data =  ['.'.repeat(data[0].length), ...data, '.'.repeat(data[0].length)];

let mapStar = {}
for(let i = 1; i< data.length-1 ; i++){    
    for(let j = 1; j< data[i].length-1 ; j++){    
        if(data[i][j]=='*'){
            mapStar[`${i}|${j}`] = [];
        }
    }
}

let sum = 0;
for(let i = 1; i< data.length-1 ; i++){    
    let currentCount = 0;
    let allValidStar = new Set();
    for(let j = 1; j< data[i].length-1 ; j++){    
        if(data[i][j] <= '9' && data[i][j] >= '0'){
            currentCount*=10;
            currentCount+=parseInt(data[i][j]);
            allValidStar = isValidChar(i,j,data, allValidStar) ;
        }else{
            if(currentCount>0) allValidStar.forEach(star => mapStar[star].push(currentCount));
            currentCount = 0;
            allValidStar = new Set();
        }
    }
    if(currentCount>0) allValidStar.forEach(star => mapStar[star].push(currentCount));
    currentCount = 0;
    allValidStar = new Set();
}

for (let key in mapStar) 
    if(mapStar[key].length==2)sum = sum + mapStar[key][0]*mapStar[key][1];

console.log(sum);

