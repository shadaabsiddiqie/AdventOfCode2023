const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8');

let lines = data.split('\n');

let initColor ={red : 12, blue : 14, green : 13}
let sum = 0;

for(let i = 0; i < lines.length; i++){
    let flagPossible = true;
    
    let game = lines[i].split(':')[0];
    let gameNo = parseInt(game.split(' ')[1]);
    
    
    let roles = lines[i].split(':')[1];
    roles = roles.split(';');
    for(let j = 0 ; j < roles.length; j++){
        draw = roles[j].split(',');
        
        for(let k = 0; k < draw.length; k++){
            let cnt = parseInt(draw[k].trim().split(' ')[0]);
            let color = draw[k].trim().split(' ')[1];
            if(initColor[color] < cnt){
                flagPossible = false;
                break;
            }
        }
    }
    if(flagPossible) {
        sum = sum + gameNo;
    }else{
        console.log(gameNo);
    }
}

console.log(sum);