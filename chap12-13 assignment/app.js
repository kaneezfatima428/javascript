// ================== Question 1 ==================
var ch = prompt("Enter a character:");

var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
    document.write("Q1: It is a Number<br><br>");
}
else if (code >= 65 && code <= 90) {
    document.write("Q1: It is an Uppercase Letter<br><br>");
}
else if (code >= 97 && code <= 122) {
    document.write("Q1: It is a Lowercase Letter<br><br>");
}
else {
    document.write("Q1: Invalid Input<br><br>");
}


// ================== Question 2 ==================
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2) {
    document.write("Q2: Larger number is " + num1 + "<br><br>");
}
else if (num2 > num1) {
    document.write("Q2: Larger number is " + num2 + "<br><br>");
}
else {
    document.write("Q2: Both numbers are equal<br><br>");
}


// ================== Question 3 ==================
var num = +prompt("Enter a number:");

if (num > 0) {
    document.write("Q3: Number is Positive<br><br>");
}
else if (num < 0) {
    document.write("Q3: Number is Negative<br><br>");
}
else {
    document.write("Q3: Number is Zero<br><br>");
}


// ================== Question 4 ==================
var letter = prompt("Enter a single letter:");

if (
    letter === "a" || letter === "e" || letter === "i" ||
    letter === "o" || letter === "u" ||
    letter === "A" || letter === "E" || letter === "I" ||
    letter === "O" || letter === "U"
) {
    document.write("Q4: True (It is a vowel)<br><br>");
}
else {
    document.write("Q4: False (Not a vowel)<br><br>");
}


// ================== Question 5 ==================
var correctPassword = "javascript123";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    document.write("Q5: Please enter your password<br><br>");
}
else if (userPassword === correctPassword) {
    document.write("Q5: Correct! The password you entered matches the original password<br><br>");
}
else {
    document.write("Q5: Incorrect password<br><br>");
}


// ================== Question 6 ==================
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write("Q6: " + greeting + "<br><br>");


// ================== Question 7 ==================
var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
    document.write("Q7: Good Morning<br><br>");
}
else if (time >= 1200 && time < 1700) {
    document.write("Q7: Good Afternoon<br><br>");
}
else if (time >= 1700 && time < 2100) {
    document.write("Q7: Good Evening<br><br>");
}
else if (time >= 2100 && time <= 2359) {
    document.write("Q7: Good Night<br><br>");
}
else {
    document.write("Q7: Invalid Time<br><br>");
}
