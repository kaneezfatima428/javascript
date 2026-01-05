// ======================
// Question 1
// ======================
var studentNames1 = [];
document.write("<h3>Q1: Empty array (Literal)</h3>");
document.write(studentNames1 + "<br>");

// ======================
// Question 2
// ======================
var studentNames2 = new Array();
document.write("<h3>Q2: Empty array (Object)</h3>");
document.write(studentNames2 + "<br>");

// ======================
// Question 3
// ======================
var stringsArray = ["Ali", "Ahmed", "Sara"];
document.write("<h3>Q3: String Array</h3>");
document.write(stringsArray + "<br>");

// ======================
// Question 4
// ======================
var numbersArray = [10, 20, 30, 40];
document.write("<h3>Q4: Numbers Array</h3>");
document.write(numbersArray + "<br>");

// ======================
// Question 5
// ======================
var booleanArray = [true, false, true];
document.write("<h3>Q5: Boolean Array</h3>");
document.write(booleanArray + "<br>");

// ======================
// Question 6
// ======================
var mixedArray = ["Ali", 25, true];
document.write("<h3>Q6: Mixed Array</h3>");
document.write(mixedArray + "<br>");

// ======================
// Question 7
// ======================
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h3>Q7: Qualifications in Pakistan</h3>");

for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// ======================
// Question 8
// ======================
var students = ["Ali", "Ahmed", "Sara"];
var scores = [420, 380, 450];
var totalMarks = 500;

document.write("<h3>Q8: Students Scores & Percentages</h3>");

for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write(
        "Score of " + students[i] + " is " + scores[i] +
        ". Percentage: " + percentage + "%<br>"
    );
}

// ======================
// Question 9
// ======================
var colors = ["Red", "Green", "Blue"];
document.write("<h3>Q9: Colors Array</h3>");
document.write(colors + "<br>");

// a) Add color at beginning
var colorStart = prompt("Enter a color to add at beginning:");
colors.unshift(colorStart);
document.write("<br>After adding at beginning: " + colors + "<br>");

// b) Add color at end
var colorEnd = prompt("Enter a color to add at end:");
colors.push(colorEnd);
document.write("After adding at end: " + colors + "<br>");

// c) Add two more colors at beginning
colors.unshift("Pink", "Yellow");
document.write("After adding two colors at beginning: " + colors + "<br>");

// d) Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br>");

// e) Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br>");

// f) Add color at specific index
var addIndex = +prompt("Enter index to add color:");
var addColor = prompt("Enter color name:");
colors.splice(addIndex, 0, addColor);
document.write("After adding color at index: " + colors + "<br>");

// g) Delete colors from specific index
var delIndex = +prompt("Enter index to delete color(s):");
var delCount = +prompt("How many colors to delete?");
colors.splice(delIndex, delCount);
document.write("After deleting colors: " + colors + "<br>");
