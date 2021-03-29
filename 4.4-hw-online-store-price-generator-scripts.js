const itemName = prompt("Enter the name of the item:");

const basePrice = prompt("What is the base price of the item?");

const blackFriday = prompt("Is today 'Black Friday'? Answer yes or no.");

const searchEngine = prompt("Did the purchaser find the product through a search engine? Answer yes or no.");

const comparisonSite = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.");

let finalPrice = basePrice;

let message = `The base price for the ${itemName} is ${basePrice}. ` 


if (blackFriday == "yes") {
    finalPrice *= .75;
    message += "Since it's Black Friday, we will reduce the price by 25%. ";
} else {
    message += "It's not Black Friday, so the price didn't change for that. ";
};

if (searchEngine == "yes") {
    finalPrice *= 1.01;
    message += "We will increase the price by 1% to pay the search engine. ";
} else {
    message += "The customer didn't use a search engine, so the price didn't change for that. ";
};

if (comparisonSite == "yes") {
    finalPrice *= .9;
    message += "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. ";
} else {
    message += "The customer didn't visit a comparison-shopping site, so the price didn't change for that. ";
};

const finalMessage = message + `The final price is $${finalPrice.toFixed(2)}.`

document.getElementById("message").innerHTML= finalMessage

