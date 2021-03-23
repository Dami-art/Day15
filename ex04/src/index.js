const milili = [10, 25, 4];  //do not change
function myArr(mili) {
"use strict";
// change below
// using mili = [4, 10, 25] would be invalid

milili[0] = 4;
milili[1] = 10;
milili[2] = 25;
// only change above
return mili;
}
console.log(myArr(milili)); //change this line
module.exports = myArr;
