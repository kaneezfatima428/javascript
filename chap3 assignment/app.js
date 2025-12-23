//declare a variable called age & assign to it your age.also show in alert
var age = "i am 17 years old";
alert (age);
//declares and initializes a variable to track visits and then shows the number of the visiter has visited in web page:
var visitCount = 1;  

var message = "You have visited this site " + visitCount + " times.";

document.getElementById("visits").innerText = message;
alert(message);
 
//Declare a variable called birthYear & assign to it your birth year. Show the message in your browser.
var birthYear = 2008;

document.write("My birth year is " + birthYear + "<br><br>");
document.write("Data type of my declared variable is number <br><br>");
 
//A visitor visits an online clothing store www.xyzClothing.com
//Store visitor’s name, product title, and quantity.
//Show the message in browser
var visitorName = "John Doe";
var productTitle = "shirt";
var quantity = 5;

document.write( visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");
