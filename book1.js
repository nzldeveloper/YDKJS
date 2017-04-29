//chapter 1 exercise

const spendingThreshold = 200; 
const phonePrice = 100;
const taxRate = 0.08;
const accessoryPrice = 10; 

var bankBalance = parseInt(prompt("What is your bank balance?")); 
var amount = 0; 
var includeTax = 0; 

function calculateTax(amount) {
    
    return amount * taxRate; 
}

function formatAmount(amount) {
    
    return "$" + amount.toFixed(2); 
}

while ( (amount + phonePrice) < bankBalance) {
    
    //you can purchase another phone; 
    
    amount += phonePrice; 
    
    if (amount < spendingThreshold) {
        
        //amount should include tax before checking against the while loop condition again
        amount = amount + accessoryPrice; 
    }
}

//calculate amount including tax

amount = amount + calculateTax(amount); 

console.log("Your purchase is " + formatAmount(amount)); 

//can you actually afford this purchase? 

if (amount <= bankBalance) {
    
    console.log("You can afford the purchase");
} else {
    
    console.log("You can't afford the purchase"); 
}