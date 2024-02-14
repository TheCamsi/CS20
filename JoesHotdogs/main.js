//define prices
const hotdogPrice = 4.65;
const fryPrice = 3.75;
const drinkPrice = 1.89;

//get order
let numDogs = prompt("How many hotdogs would you like?");
let numFries = prompt("How many fries would you like?");
let numSoda = prompt("How many drinks would you like?");
//write to html
document.write("Number of Hotdogs: " + numDogs + "<br/>");
document.write("Number of Fries: " + numFries + "<br/>");
document.write("Number of Drinks: " + numSoda + "<br/>");
//calc total
let subtotal = hotdogPrice * numDogs + fryPrice * numFries + 
drinkPrice * numSoda;

//write subtotal to html
document.write("Subtotal: $" + showMoney(subtotal) + "<br/>");

//check for Joe's special offer
if(subtotal >= 25) {
    subtotal = subtotal * 0.9;
}

//write discount
document.write("After discount (if subtotal > $25): $" + showMoney(subtotal) + "<br/>");

//add tax
let tax = subtotal * 0.0625;
document.write("Tax: $" + showMoney(tax) + "<br/>");
//calc and show total
let total = tax + subtotal;
document.write("Total: $" + showMoney(total));

//showMoney
//Argument: float for an amount of money
//Purpose: format/round given amount as proper currency (2 decimal places)
//return: a string of the properly formatted amount of money
function showMoney(amount) {
    //get the part of the amount we want to keep
    let multipliedAmount = amount * 100;
    //get the last decimal to determine if we need to round up or down
    let decimal = multipliedAmount % 1;
    //if decimal is >= 0.5 round up
    if(decimal >= 0.5) {
        multipliedAmount += 1 - decimal;
    }
    else multipliedAmount -= decimal;
    //get amount back to decimal
    multipliedAmount = multipliedAmount / 100;
    let finalString = multipliedAmount.toString();

    //determine if 0s need to be added
    if(finalString.length === 2) {
        return finalString + "0";
    }
    else if(finalString.length === 1) {
        return finalString + ".00";
    }
    else return finalString
}
