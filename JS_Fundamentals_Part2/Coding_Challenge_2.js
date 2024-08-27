// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
function calcTip(bill){
    return bill >=50 && bill <=300? 0.15*bill:0.2*bill;
}
console.log(calcTip(100));

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
var bills=[100,300,1000];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
var tips= bills.map(bill => calcTip(bill));
console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
var total = bills.map( (num,index)=>num+tips[index]);
console.log(total);