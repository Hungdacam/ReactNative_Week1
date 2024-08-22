var scoreDolphins=[97,112,101];
var scoreKoalas=[109,95,106];

//1. Calculate the average score for each team
//, using the test data below
//dolphins
var sumScoreDolphins=scoreDolphins.reduce(
    function (sum,score){
        return sum+score;
    }
,0);
var avrScoreDolphins=sumScoreDolphins/3;

console.log("Dolphins's average score: ",avrScoreDolphins.toFixed(3));


//Koalas
var sumScoreKoalas=scoreKoalas.reduce(
    function (sum,score){
        return sum+score;
    }
,0);

var avrScoreKoalas=sumScoreKoalas/3;

console.log("Koalas's average score: ",avrScoreKoalas.toFixed(3));

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

var checkbigger=avrScoreDolphins>avrScoreKoalas;
var checkequal=avrScoreDolphins=avrScoreKoalas;

// var result=checkbigger?"Dolphins is winner":checkequal?"Draw":"Koalas is winner";
// console.log(result);

// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

if (checkbigger){
    if (avrScoreDolphins>100){
        console.log("Dolphins is winner");
    }
}
else if (avrScoreKoalas>100){
    console.log("Koalas is winner");
}
else 
    console.log("draw");

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

if (avrScoreDolphins>=100 && avrScoreKoalas>=100){
    if (checkequal){
        console.log("no team wins the trophy");
    }
}
