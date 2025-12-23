// Question 1
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// Question 2
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

// Question 3
var a;
document.write("Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a = a + 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Question 4
var ticketPrice = 600;
var totalTickets = 5;
document.write("Total cost to buy 5 tickets is " + (ticketPrice * totalTickets) + " PKR<br><br>");

// Question 5
var table = 4;
document.write("Table of " + table + "<br>");
document.write(table + " x 1 = " + table * 1 + "<br>");
document.write(table + " x 2 = " + table * 2 + "<br>");
document.write(table + " x 3 = " + table * 3 + "<br>");
document.write(table + " x 4 = " + table * 4 + "<br>");
document.write(table + " x 5 = " + table * 5 + "<br><br>");

// Question 6
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fTemp = 70;
var cTemp = (fTemp - 32) * 5 / 9;
document.write(fTemp + "°F is " + cTemp + "°C<br><br>");

// Question 7
var price1 = 500;
var price2 = 300;
var qty1 = 2;
var qty2 = 3;
var shipping = 200;

var totalCost = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("Total cost of your order is " + totalCost + "<br><br>");

// Question 8
var totalMarks = 500;
var obtainedMarks = 420;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br><br>");

// Question 9
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total currency in PKR: " + totalPKR + "<br><br>");

// Question 10
var number = ((5 + 5) * 10) / 2;
document.write("Result after calculations: " + number + "<br><br>");

// Question 11
var currentYear = 2025;
var birthYear = 2008;
document.write("They are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1) + " years old<br><br>");

// Question 12
var radius = 10;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");

// Question 13

var snack = "Chocolate";
document.write("Favorite snack: " + snack + "<br>");

var currentAge = 17;
document.write("Current age: " + currentAge + "<br>");

var maxAge = 60;
document.write("Maximum age: " + maxAge + "<br>");

var perDay = 2;
document.write("Snacks per day: " + perDay + "<br>");

var totalSnacks = (maxAge - currentAge) * 365 * perDay;

document.write(
"You will need " + totalSnacks + " " + snack +
" to last you until the ripe old age of " + maxAge
);

