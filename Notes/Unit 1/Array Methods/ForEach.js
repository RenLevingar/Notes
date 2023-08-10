// Array method ForEach: executes a provided function once for each element in an array

let neededDrinks = {};

people.forEach((person)=>{
    const {drink} = person;
    neededDrinks[drink] ? (neededDrinks[drink] += 1) : (neededDrinks[drink] = 1);
})
console.log(neededDrinks);