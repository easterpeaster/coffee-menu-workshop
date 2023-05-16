const coffeeMenu = require("./coffee_data.js");

const drinksArray = [];

for (const drink of coffeeMenu) { 
    drinksArray.push(drink.name);
}
console.log('Drinks:', drinksArray);

const drinksUnder5 = [];

for (const drink of coffeeMenu) { 
    if(drink.price <= 5) {
        drinksUnder5.push(drink.name);   
    }
}
console.log('Drinks under $5:', drinksUnder5);

const evenPricedDrinks = [];

for(const drink of coffeeMenu) {
    if(drink.price % 2 === 0) {
        evenPricedDrinks.push(drink.name);
    }
}
console.log('Even priced drinks:', evenPricedDrinks);

let totalPrice = 0;

for(const drink of coffeeMenu) {
    totalPrice += drink.price;
}
console.log('Total price for Drinks: $', totalPrice);

const seasonalDrinks = [];

for(const drink of coffeeMenu) {
    if(drink.seasonal === true) {
        seasonalDrinks.push(drink.name);
    }
}
console.log('Seasonal Drinks:', seasonalDrinks);


for(const drink of seasonalDrinks) {
        console.log(drink, 'with imported beans');
}
