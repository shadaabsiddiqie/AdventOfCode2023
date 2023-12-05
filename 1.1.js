const fs = require('node:fs');
const path = require('path');
let sum = 0;
try {
    let data = fs.readFileSync(path.join(__dirname, '1.1.data'), 'utf8');
    data = data.split('\n');

    data.forEach(element => {
        let numbers = element.replace(/\D/g, '');
        let num = numbers[0]+numbers[numbers.length-1]
        sum = sum +  parseInt(num);
    });
} catch (err) {
  console.error(err);
}
console.log(sum);