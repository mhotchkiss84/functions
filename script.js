// function myFunction(){
//     console.log("I love Javascript");
// }

// myFunction();


// Lightning Exercise
// Dream Vacation
// Write a function that accepts two parameters of name and destination.
// function myVaca(name, destination){
//     console.log(`${name} wants to go to ${destination}`);
// }
// myVaca("Test", "Alaska");
// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.


// Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence.
// Execute the function.
// Log the returned sentence to the console.
function tacoOrder(typeOfShell, topping){
    var ready = (`${typeOfShell} taco with ${topping} is ready`);
    return ready;
}
var printReady = tacoOrder("soft", "chicken");
console.log(printReady);

// Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
function add(numberOne, numberTwo){
    console.log(numberOne + numberTwo);
}
add(1, 1);
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
function subtract(numberOne, numberTwo){
    console.log(numberOne - numberTwo);
}
subtract(2, 1);
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
function multiply(numberOne, numberTwo){
    console.log(numberOne * numberTwo);
}
multiply(5, 2);
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
function divide(numberOne, numberTwo) {
    console.log(numberOne / numberTwo);
}
divide(10, 2);
// Call each function three times with different parameters.