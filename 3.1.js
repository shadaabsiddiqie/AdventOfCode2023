const fs = require('fs');
const path = require('path');

function cmp(i, j, matrix){
    return (matrix[i][j] !='.' && (matrix[i][j] >'9' || matrix[i][j] <'0'));
}
function isValidChar(i, j, m){
    if(cmp(i+1,j,m) || cmp(i+1,j+1,m) || cmp(i+1,j-1,m) || cmp(i-1,j,m) || cmp(i-1,j+1,m) || cmp(i-1,j-1,m) ||
       cmp(i,j+1,m) || cmp(i,j-1,m)) return true;
    return false;
}

let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8');
data = data.split('\n');

for(let i = 0; i< data.length ; i++){    
    data[i] = `.${data[i].split('\r')[0]}.`;
}
data =  ['.'.repeat(data[0].length), ...data, '.'.repeat(data[0].length)];
let sum = 0;
for(let i = 1; i< data.length-1 ; i++){    
    let currentCount = 0
    let needToAdd = false;
    for(let j = 1; j< data[i].length-1 ; j++){    
        if(data[i][j] <= '9' && data[i][j] >= '0'){
            currentCount*=10;
            currentCount+=parseInt(data[i][j]);
            needToAdd = needToAdd || isValidChar(i,j,data) ;
            // console.log(currentCount);
        }else{
            if(needToAdd) {
                // console.log(currentCount);
                sum = sum + currentCount;
            }
            needToAdd = false;
            currentCount = 0;
        }
    }
    if(needToAdd) sum = sum + currentCount;
    needToAdd = false; currentCount = 0;
}

console.log(sum);;

