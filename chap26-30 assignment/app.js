// ========== Question 1 ==========

var num1 = +prompt("Enter a positive integer:");

document.write("<h3>Question 1</h3>");
document.write("Number: " + num1 + "<br>");
document.write("Round off value: " + Math.round(num1) + "<br>");
document.write("Floor value: " + Math.floor(num1) + "<br>");
document.write("Ceil value: " + Math.ceil(num1) + "<br><br>");


// ========== Question 2 ==========

var num2 = +prompt("Enter a negative floating point number:");

document.write("<h3>Question 2</h3>");
document.write("Number: " + num2 + "<br>");
document.write("Round off value: " + Math.round(num2) + "<br>");
document.write("Floor value: " + Math.floor(num2) + "<br>");
document.write("Ceil value: " + Math.ceil(num2) + "<br><br>");


// ========== Question 3 ==========

var num3 = +prompt("Enter any number to find absolute value:");

document.write("<h3>Question 3</h3>");
document.write("Absolute value of " + num3 + " is " + Math.abs(num3) + "<br><br>");


// ========== Question 4 ==========

var dice = Math.floor(Math.random() * 6) + 1;

document.write("<h3>Question 4</h3>");
document.write("Random dice value: " + dice + "<br><br>");


// ========== Question 5 ==========

var toss = Math.floor(Math.random() * 2) + 1;

document.write("<h3>Question 5</h3>");

if (toss === 1) {
    document.write("Random coin value: Heads<br><br>");
} else {
    document.write("Random coin value: Tails<br><br>");
}


// ========== Question 6 ==========

var randomNum = Math.floor(Math.random() * 100) + 1;

document.write("<h3>Question 6</h3>");
document.write("Random number between 1 and 100: " + randomNum + "<br><br>");


// ========== Question 7 ==========

var weight = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
var parsedWeight = parseFloat(weight);

document.write("<h3>Question 7</h3>");
document.write("Your weight is: " + parsedWeight + " kilograms<br><br>");


// ========== Question 8 ==========

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess the secret number (between 1 and 10):");

document.write("<h3>Question 8</h3>");

if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.<br>");
} else {
    document
