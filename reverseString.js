let str1 = "Hi this is string";
let str2 = (str1.split(' ').reverse());
let ans = [];
let reverseStr = str2.forEach((val,idx)=>ans.push(val.split('').reverse().join('')));
console.log(ans.join(' '),str2);



// two solution

const str = "Hi this is string";
const words = str.split(' ');
const reversedWords = words.map(word => word.split('').reverse().join(''));
console.log( reversedWords);
const reversedStr = reversedWords.reverse().join(' ');

console.log(reversedStr, reversedWords);
