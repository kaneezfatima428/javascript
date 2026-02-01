// Create current date object
var now = new Date();


// ========== Question 1 ==========
document.write("<h3>Q1</h3>");
document.write("Current Date & Time: " + now + "<br><br>");


// ========== Question 2 ==========
var months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

document.write("<h3>Q2</h3>");
document.write("Current Month: " + months[now.getMonth()] + "<br><br>");


// ========== Question 3 ==========
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

document.write("<h3>Q3</h3>");
document.write("Today is: " + days[now.getDay()] + "<br><br>");


// ========== Question 4 ==========
document.write("<h3>Q4</h3>");
if (now.getDay() === 0 || now.getDay() === 6) {
    document.write("It’s Fun day<br><br>");
} else {
    document.write("It’s not Fun day<br><br>");
}


// ========== Question 5 ==========
document.write("<h3>Q5</h3>");
if (now.getDate() < 16) {
    document.write("First fifteen days of the month<br><br>");
} else {
    document.write("Last days of the month<br><br>");
}


// ========== Question 6 ==========
document.write("<h3>Q6</h3>");
var minutesSince1970 = now.getTime() / (1000 * 60);
document.write("Minutes since Jan 1, 1970: " + Math.floor(minutesSince1970) + "<br><br>");


// ========== Question 7 ==========
document.write("<h3>Q7</h3>");
if (now.getHours() < 12) {
    document.write("Its AM<br><br>");
} else {
    document.write("Its PM<br><br>");
}


// ========== Question 8 ==========
document.write("<h3>Q8</h3>");
var laterDate = new Date(2020, 11, 31); // December is 11
document.write("Later Date: " + laterDate + "<br><br>");


// ========== Question 9 ==========
document.write("<h3>Q9</h3>");
var ramadanStart = new Date("June 18, 2015");
var diff = now.getTime() - ramadanStart.getTime();
var daysPassed = Math.floor(diff / (100
