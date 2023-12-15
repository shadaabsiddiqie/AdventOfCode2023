const path = require('path');
const fs = require('fs');

function whichType(a){
    let mp  = {};
    let uniq = [... new Set([...a])]
    let acc = '';
    for(let i = 0; i< a.length; i++){
        curr = a[i]
        if(acc.includes(curr)){
            mp[curr]++;            
        }else{
            mp[curr] = 1;
            acc = acc+curr;
        }
    }
    // console.log(a, uniq.length);
    if(uniq.length == 2) {
        if(mp[uniq[0]]==4||mp[uniq[1]]==4) return 2;
        if(mp[uniq[0]]==3||mp[uniq[1]]==3) return 3;
    }
    if(uniq.length == 3) {
        if(mp[uniq[0]]==3||mp[uniq[1]]==3||mp[uniq[2]]==3) return 4;
        return 5;
    }
    if(uniq.length == 4) return 6; 
    if(uniq.length == 5) return 7;

    return uniq.length;
}


let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8').split('\n');
cards = []
cardsAmount = {};
data.forEach(line =>{
    cards.push(line.split(' ')[0]);
    cardsAmount[line.split(' ')[0]] = parseInt( line.split(' ')[1]);
});
cards.sort((a, b)=>{
    if(whichType(a) < whichType(b)) return 1;
    else if(whichType(a) > whichType(b)) return -1;
    else {
        let mp = {A:1, K:2, Q:3, J:4, T:5, 9:6, 8:7, 7:8, 6:9, 5:10, 4:11, 3:12, 2:13};
        for(let i = 0; i< a.length; i++){
            if(mp[a[i]]>mp[b[i]]) return -1;
            else if(mp[a[i]]<mp[b[i]]) return 1;
        }        
        return 0;
    }
});

let sum = 0;
cards.forEach((val, ind) => {
    sum += (ind+1)*cardsAmount[val];
})
console.log(sum);



