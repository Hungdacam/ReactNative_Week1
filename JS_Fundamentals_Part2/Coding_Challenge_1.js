var dolphins_score= [85,54,41];
var koalas_score= [23,34,27];
//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
var calcAverage = (points) =>{
    var sum = points.reduce((accumulator,currentValue)=>{
        return accumulator += currentValue;
    },0);
    return (sum/3).toFixed(2);
};
//2. Use the function to calculate the average for both teams
var avgDolphins= calcAverage(dolphins_score);
console.log(avgDolphins);

var avgKoalas= calcAverage(koalas_score);
console.log(avgKoalas);

//3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
//to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"

function checkWinner(avgDolphin, avgKoala){
    return avgDolphin >= avgKoala ? `Dolphins win (${avgDolphin} vs. ${avgKoala})`:`Koalas win (${avgKoala} vs. ${avgDolphin})`;
}
//4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log(checkWinner(avgDolphins,avgKoalas)); 