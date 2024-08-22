// 1. Store Mark's and John's mass and height in variables
//Test data 1:
var marksWeights=78;
var joinWeights=92;
var marksHeights=1.69;
var joinHeights=1.95;

//Test data 2:
var marksWeights_2=95;
var joinWeights_2=85;
var marksHeights_2=1.88;
var joinHeights_2=1.76;
//2. Calculate both their BMIs using the formula (you can even implement both versions)

//Test data 1:
var bmiMarks_1=marksWeights / marksHeights ** 2;
var bmiJoin_1=joinWeights / joinHeights **2; 

console.log("Marks's BMI is: ", bmiMarks_1.toFixed(3));
console.log("Join's BMI is: ", bmiJoin_1.toFixed(3));

//Test data 2:
var bmiMarks_2=marksWeights_2 / marksHeights_2 **2;
var bmiJoin_2=joinWeights_2 / joinHeights_2 **2;

console.log("Marks's BMI is: ", bmiMarks_2.toFixed(3));
console.log("Join's BMI is: ", bmiJoin_2.toFixed(3));

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

//test data 1
var markHigherBMI_1 = bmiMarks_1>bmiJoin_1;
console.log("Is Marks higher BMI than Join? ",markHigherBMI_1);

// test data 2
var markHigherBMI_2 = bmiMarks_2>bmiJoin_2;
console.log("Is Marks higher BMI than Join? ",markHigherBMI_2);



