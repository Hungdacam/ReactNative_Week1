// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
var info_Marks={
    name: 'Mark Miller',
    mass: 78,
    height: 1.69
}
var info_John={
    name: 'John Smith',
    mass: 92,
    height: 1.95
}

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
info_Marks.calcBMI= function(){
    this.BMI=(this.mass / (this.height **2)).toFixed(1);
    return this.BMI;
}
info_Marks.calcBMI();
console.log(info_Marks);

info_John.calcBMI= function(){
    this.BMI=(this.mass / (this.height **2)).toFixed(1);
    return this.BMI;
}
info_John.calcBMI();
console.log(info_John.BMI);
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

var result=info_Marks.BMI > info_John.BMI?`${info_Marks.name}'s BMI (${info_Marks.BMI}) is higher than ${info_John.name}'s BMI (${info_John.BMI})`: 
info_Marks.BMI < info_John.BMI?` ${info_John.name}'s BMI (${info_John.BMI}) is higher than ${info_Marks.name}'s BMI (${info_Marks.BMI})`:'equal BMI';
console.log(result);