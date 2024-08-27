// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
var bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
var tips=[];
var totals=[];
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
function calcTip(bill){
    return bill >=50 && bill <=300? 0.15*bill:0.2*bill;
}
for (var i=0;i<10;i++){
    var sum= bills[i]+calcTip(bills[i]);
    tips.push(calcTip(bills[i]));
    totals.push(sum);
}
console.log(tips);
console.log(totals);
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! 

function calcAverage(arr){
    var sum = arr.reduce((a,b) => a+=b,0);
    var result=(sum/arr.length).toFixed(1);
    return result;
}

console.log(calcAverage(totals));