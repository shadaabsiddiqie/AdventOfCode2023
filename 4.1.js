const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8');
totalSum = 0;

data = data.split('\n');
cumArray = Array(data.length).fill(1);
for(let i = 0; i<data.length; i++){
    winMap = {};
    sum = 0;
    winNo = data[i].split(':')[1].split('|')[0].trim().split(' ');
    for(let j = 0 ; j<winNo.length; j++){
        if(winNo[j]!=''){
            if(parseInt(winNo[j]) in winMap){
            winMap[parseInt(winNo[j])]++;
            }else{
                winMap[parseInt(winNo[j])] = 1;
            }
        }
    }
    yourNo = data[i].split(':')[1].split('|')[1].trim().split(' ');
    for(let j = 0 ; j<yourNo.length; j++){
        if(yourNo[j]!=''){
            if(parseInt(yourNo[j]) in winMap && winMap[parseInt(yourNo[j])] > 0){
                winMap[parseInt(yourNo[j])]--;
                sum++;
            }
        }
    }
    // console.log(sum);
    if(sum > 0) {
        for(let k = 1; k <= sum; k++){
            cumArray[i+k] = cumArray[i+k] + cumArray[i];    
        }
    }
}
sum = 0;
for(let k = 0; k < cumArray.length; k++){
    sum = sum + cumArray[k];    
}

// console.log(cumArray)
console.log(sum);


