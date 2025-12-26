//Question 1 – Arithmetic Operations
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><hr>");

//Question 2 – Pre/Post Increment Explanation
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><hr>");


//Question 3 – Greet User

var userName = prompt("Enter your name:");
document.write("Hello " + userName + "! Welcome.<br><hr>");


//Question 5 – Multiplication Table
var num = prompt("Enter a number for table", 5);

document.write("<h3>Table of " + num + "</h3>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

document.write("<hr>");

//Question 6 – Subjects, Marks & Percentage (Table)

var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");

var totalMarks = 100;

var marks1 = +prompt("Enter marks for " + sub1);
var marks2 = +prompt("Enter marks for " + sub2);
var marks3 = +prompt("Enter marks for " + sub3);

var obtained = marks1 + marks2 + marks3;
var percentage = (obtained / 300) * 100;

document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");

document.write("<tr><th>Total</th><th>300</th><th>" + obtained + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");
