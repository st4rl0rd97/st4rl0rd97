const input = require('sync-input') // will need to find a better way to take input at some point 

// Declare the constants for ingredients
const water = 200;
const milk = 50;
const coffeeBeans = 15;

// Declare the variables for totalling ingredients
let totalWater;
let totalMilk;
let totalBeans;


// This function will return a value entered by the user at the input prompt when it is called
function getCoffeeQty() {
  return input("Please enter the number of coffee drinks you're making:\n> ");
}


// This function takes the total number of coffees 
// Then multiplies it by the ingredient values and returns the calculations as a list
function calcTotalIngredients(coffeeQty) {  
  totalWater = (coffeeQty * water);
  totalMilk = (coffeeQty * milk);
  totalBeans = (coffeeQty * coffeeBeans);

  return totals = [coffeeQty, totalWater, totalMilk, totalBeans]
}

// The main function will call calcTotalIngredients, 
// Which will call getCoffeeQty as it's parameter, calculate total ingredients needed,
// Then the main function will output the list items to the console
function main() {
  // generate the list from the customer's order
  let totals = calcTotalIngredients(getCoffeeQty());

  console.log(`For ${totals[0]} cups of coffee you will need:`);
  console.log(`${totals[1]} ml of water,`);
  console.log(`${totals[2]} ml of milk,`);
  console.log(`${totals[3]} g of coffee beans`);
}

main();

/* Commented out until needed again
console.log("Starting to make a coffee")
console.log("Grinding coffee beans")
console.log("Boiling water")
console.log("Mixing boiled water with crushed coffee beans")
console.log("Pouring coffee into the cup")
console.log("Pouring some milk into the cup")
console.log("Coffee is ready!")
*/
