//import input from "sync-input"; // will need to find a better way to take input at some point

/** `const water = 200; // in ml; const milk = 50; // in ml; const coffeeBeans = 15; // in grams`
 * are declaring constants for the amount of water, milk, and coffee beans needed to make one
 * cup of coffee. These values are in milliliters and grams respectively.
 */
const water = 200; // in ml
const milk = 50; // in ml
const coffeeBeans = 15; // in grams

/** `let totalWater; let totalMilk; let totalBeans;` are declaring three variables without assigning
 * them any values. These variables will be used to store the total amount of water, milk, and coffee
 * beans needed to make the desired number of cups of coffee. The values of these variables will be
 * calculated later in the program.
 */
let totalWater;
let totalMilk;
let totalBeans;

/** The function prompts the user to enter the number of coffee drinks they are making.
 * @returns The `getCoffeeQty` function is returning a prompt that asks the user to enter the number of
 * coffee drinks they are making.
 */
function getCoffeeQty() {
  return prompt("Please enter the number of coffee drinks you're making:\n> ");
}

/** The `calcTotalIngredients` function takes in a parameter `coffeeQty`, which represents the number of
 * cups of coffee the user wants to make. It then calculates the total amount of water, milk, and
 * coffee beans needed to make the desired number of cups of coffee by multiplying the amount of each
 * ingredient needed for one cup of coffee by the `coffeeQty` parameter. The function then returns an
 * array `totals` containing the `coffeeQty` parameter and the calculated total amounts of water, milk,
 * and coffee beans.
 */
function calcTotalIngredients(coffeeQty) {
  totalWater = coffeeQty * water;
  totalMilk = coffeeQty * milk;
  totalBeans = coffeeQty * coffeeBeans;

  return (totals = [coffeeQty, totalWater, totalMilk, totalBeans]);
}

/** The main function calculates the total amount of ingredients needed for a certain number of cups of
 * coffee and prints the results.
 */
function main() {
  let totals = calcTotalIngredients(getCoffeeQty());

  console.log(`For ${totals[0]} cups of coffee you will need:`);
  console.log(`${totals[1]} ml of water,`);
  console.log(`${totals[2]} ml of milk,`);
  console.log(`${totals[3]} g of coffee beans`);
}

/* Commented out until needed again
console.log("Starting to make a coffee")
console.log("Grinding coffee beans")
console.log("Boiling water")
console.log("Mixing boiled water with crushed coffee beans")
console.log("Pouring coffee into the cup")
console.log("Pouring some milk into the cup")
console.log("Coffee is ready!")
*/
