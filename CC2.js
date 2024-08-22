//Use the BMI example from Challenge #1, and the code you already wrote,
//and improve it.
var marksWeights=78;
var joinWeights=92;
var marksHeights=1.69;
var joinHeights=1.95;

var bmiMarks=marksWeights / marksHeights ** 2;
var bmiJoin=joinWeights / joinHeights **2; 


var markHigherBMI = bmiMarks>bmiJoin;

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
var message=markHigherBMI?"Mark's BMI is higher than John's!":"John's BMI is higher than Mark's!";

console.log(message);
let message_2;

// 2. Use a template literal to include the BMI values in the outputs. Example: 
//"Mark's BMI (28.3) is higher than John's (23.9)!"

if (markHigherBMI) {
    message_2=`Mark\'s BMI ${bmiMarks.toFixed(3)} is higher than John\'s ${bmiJoin.toFixed(3)}!`;
}
else {
     message_2=`John's ${bmiJoin.toFixed(3)} BMI is higher than Mark's ${bmiMarks.toFixed(3)}!`;
}
console.log(message_2);
