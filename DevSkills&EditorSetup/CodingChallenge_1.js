var temp=[17, 21, 23];
function printForecast(arr){
    var result=``;
    for (var i=0; i<arr.length; i++){
        result+=`...${arr[i]}\u00B0C in ${i+1} days...`;
    }
    return result;
}

console.log(printForecast(temp));

