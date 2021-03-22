function printManyTimes(str) {
"use strict";

//change bellow
const SENTENCE = str + " is cool!";
for (let i = 0; 1 < str.length; i +=2) {
console.log(SENTENCE);
}
return SENTENCE;
//Change above
}
printManyTimes("Arena");
module.exports = printManyTimes;
