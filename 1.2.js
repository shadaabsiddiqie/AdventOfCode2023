const path = require('path');
const fs = require('fs');

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to replace the first instance of any word in numStr with its index + 1
function stringWithFirstNumReplaced(str, numStr) {
    let lowestIndex = Infinity;
    let wordToReplace = '';
    
    numStr.forEach(word => {
        const index = str.indexOf(word);
        if (index >= 0 && index < lowestIndex) {
            lowestIndex = index;
            wordToReplace = word;
        }
    });

    if (wordToReplace) {
        return str.replace(wordToReplace, numStr.indexOf(wordToReplace) + 1);
    } else {
        return str; // Return original string if no word from numStr is found
    }
}

// Reading data from file and splitting it into lines
let data = fs.readFileSync(path.join(__dirname, 'test.data'), 'utf-8').split('\n');

let sum = 0;
const numStr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const reversedNumStr = numStr.map(reverseString);

data.forEach(str => {
    // Replace first occurrence of any number word in the original and reversed strings
    let leftFix = stringWithFirstNumReplaced(str, numStr);
    let rightFix = stringWithFirstNumReplaced(reverseString(str), reversedNumStr);

    // Extracting the first digits from the modified strings
    let numbers1 = leftFix.replace(/\D/g, '');
    let numbers2 = rightFix.replace(/\D/g, '');

    // Concatenating the first digits; if no digit, default to '0'
    let concatenatedNumbers = (numbers1[0] || '0') + (numbers2[0] || '0');

    console.log(str, concatenatedNumbers);
    console.log(str);
    console.log(concatenatedNumbers);
    sum += parseInt(concatenatedNumbers, 10);
});

console.log("Total Sum: " + sum);
