// ============================
// Q1: Empty multidimensional array
// ============================
var multiArray = [];
document.write("<h3>Q1: Empty Multidimensional Array</h3>");
document.write(multiArray + "<br><br>");

// ============================
// Q2: Matrix multidimensional array
// ============================
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

document.write("<h3>Q2: Matrix</h3>");
for (var i = 0; i < matrix.length; i++) {
  document.write(matrix[i].join(" ") + "<br>");
}
document.write("<br>");

// ============================
// Q3: Counting 1 to 10
// ============================
document.write("<h3>Q3: Counting 1 to 10</h3>");
for (var i = 1; i <= 10; i++) {
  document.write(i + " ");
}
document.write("<br><br>");

// ============================
// Q4: Multiplication table
// ============================
var tableNum = prompt("Enter table number:");
var tableLength = prompt("Enter table length:");

document.write("<h3>Q4: Multiplication Table</h3>");
for (var i = 1; i <= tableLength; i++) {
  document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

// ============================
// Q5: Fruits array
// ============================
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h3>Q5: Fruits List</h3>");
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}
document.write("<br>");

// ============================
// Q6: Series
// ============================
document.write("<h3>Q6: Series</h3>");

// a. Counting
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>");

// b. Reverse counting
document.write("Reverse Counting: ");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br>");

// c. Even
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");

// d. Odd
document.write("Odd: ");
for (var i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");

// e. Series
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
document.write("<br><br>");

// ============================
// Q7: Search in array
// ============================
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:");
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}

document.write("<h3>Q7: Search Result</h3>");
if (found) {
  document.write(userInput + " is found in the list<br><br>");
} else {
  document.write(userInput + " is not found in the list<br><br>");
}

// ============================
// Q8: Largest number
// ============================
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

document.write("<h3>Q8: Largest Number</h3>");
document.write("Array items: " + numbers + "<br>");
document.write("Largest number is: " + largest + "<br><br>");

// ============================
// Q9: Smallest number
// ============================
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

document.write("<h3>Q9: Smallest Number</h3>");
document.write("Smallest number is: " + smallest + "<br><br>");

// ============================
// Q10: Multiples of 5 (1–100)
// ============================
document.write("<h3>Q10: Multiples of 5</h3>");
for (var i = 5; i <= 100; i += 5) {
  document.write(i + ", ");
}
