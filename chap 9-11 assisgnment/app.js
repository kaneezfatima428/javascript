// Q1 City Name
var city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// Q2 Gender
var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
}

// Q3 Traffic Signal
var color = prompt("Enter traffic signal color:");
if (color.toLowerCase() === "red") {
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (color.toLowerCase() === "green") {
    alert("Move now");
}

// Q4 Fuel
var fuel = prompt("Enter remaining fuel in litres:");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Q5 Condition Checking
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
if (materialCost + laborCost === 22000) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Q6 Marks & Grade
var totalMarks = 300;
var marksObtained = Number(prompt("Enter marks obtained out of 300"));
var percentage = (marksObtained / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h3>Mark Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br><br>");

// Q7 Guess Game
var secret = 7;
var guess = Number(prompt("Guess the number (1–10):"));
if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}

// Q8 Divisible by 3
var num = prompt("Enter a number:");
if (num % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// Q9 Even or Odd
var num2 = prompt("Enter a number:");
if (num2 % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// Q10 Temperature
var temp = prompt("Enter temperature:");
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

// Q11 Calculator
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var op = prompt("Enter operation (+, -, *, /, %)");

if (op === "+") {
    alert(num1 + num2);
} else if (op === "-") {
    alert(num1 - num2);
} else if (op === "*") {
    alert(num1 * num2);
} else if (op === "/") {
    alert(num1 / num2);
} else if (op === "%") {
    alert(num1 % num2);
}
