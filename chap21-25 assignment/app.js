// Assignment # 21–25 : STRING METHODS (External JavaScript)
// You can link this file with HTML using: <script src="app.js"></script>

// ===================== Q1 =====================
// Merge first & last name and greet user
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("<h3>Q1</h3>Hello, " + fullName + "!<br>");

// ===================== Q2 =====================
// Favorite mobile phone model & length
var mobile = prompt("Enter your favorite mobile phone model:");
document.write("<h3>Q2</h3>My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + mobile.length + "<br>");

// ===================== Q3 =====================
// Index of 'n' in Pakistani
var word = "Pakistani";
document.write("<h3>Q3</h3>Index of 'n' in Pakistani: " + word.indexOf("n") + "<br>");

// ===================== Q4 =====================
// Last index of 'l' in Hello World
var text = "Hello World";
document.write("<h3>Q4</h3>Last index of 'l': " + text.lastIndexOf("l") + "<br>");

// ===================== Q5 =====================
// Character at 3rd index in Pakistani
var word2 = "Pakistani";
document.write("<h3>Q5</h3>Character at index 3: " + word2.charAt(3) + "<br>");

// ===================== Q6 =====================
// Repeat Q1 using concat()
var fullName2 = firstName.concat(" ", lastName);
document.write("<h3>Q6</h3>Hello, " + fullName2 + " (using concat)<br>");

// ===================== Q7 =====================
// Replace Hyder with Islam
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("<h3>Q7</h3>City after replacement: " + newCity + "<br>");

// ===================== Q8 =====================
// Replace all 'and' with '&'
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("<h3>Q8</h3>" + newMessage + "<br>");

// ===================== Q9 =====================
// Convert string to number
var strNum = "472";
var num = Number(strNum);
document.write("<h3>Q9</h3>Value: " + num + "<br>Type: " + typeof num + "<br>");

// ===================== Q10 =====================
// Convert input to capital letters
var input1 = prompt("Enter any text (Capital letters):");
document.write("<h3>Q10</h3>" + input1.toUpperCase() + "<br>");

// ===================== Q11 =====================
// Convert input to title case
var input2 = prompt("Enter any text (Title Case):");
var titleCase = input2.split(" ");
for (var i = 0; i < titleCase.length; i++) {
  titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1).toLowerCase();
}
document.write("<h3>Q11</h3>" + titleCase.join(" ") + "<br>");

// ===================== Q12 =====================
// Remove dot from number
var num2 = 35.36;
var str2 = num2.toString().replace(".", "");
document.write("<h3>Q12</h3>Result: " + str2 + "<br>");

// ===================== Q13 =====================
// Username validation
var username = prompt("Enter username:");
var isValid = true;
for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isValid = false;
    break;
  }
}
if (!isValid) {
  alert("Please enter a valid username (no @ . , !)");
}
document.write("<h3>Q13</h3>Username: " + username + "<br>");

// ===================== Q14 =====================
// Bakery search (case insensitive)
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Welcome to ABC Bakery. What do you want?").toLowerCase();
var found = false;
for (var i = 0; i < bakery.length; i++) {
  if (bakery[i] === searchItem) {
    found = true;
    break;
  }
}
document.write("<h3>Q14</h3>");
if (found) {
  document.write(searchItem + " is available in our bakery.<br>");
} else {
  document.write(searchItem + " is not available in our bakery.<br>");
}

// ===================== Q15 =====================
// Password validation
var password = prompt("Enter password:");
var hasAlpha = false;
var hasNum = false;
if (password.length >= 6 && isNaN(password.charAt(0))) {
  for (var i = 0; i < password.length; i++) {
    var c = password.charCodeAt(i);
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) hasAlpha = true;
    if (c >= 48 && c <= 57) hasNum = true;
  }
}
if (!(hasAlpha && hasNum)) {
  alert("Invalid password. Please follow the rules.");
}
document.write("<h3>Q15</h3>Password entered.<br>");

// ===================== Q16 =====================
// String to array using split
var university = "University of Karachi";
var uniArray = university.split(" ");
document.write("<h3>Q16</h3>");
for (var i = 0; i < uniArray.length; i++) {
  document.write(uniArray[i] + "<br>");
}

// ===================== Q17 =====================
// Last character of user input
var input3 = prompt("Enter any text:");
document.write("<h3>Q17</h3>Last character: " + input3.charAt(input3.length - 1) + "<br>");

// ===================== Q18 =====================
// Count occurrences of 'the'
var sentence = "The quick brown fox jumps over the lazy dog";
var count = sentence.toLowerCase().split("the").length - 1;
document.write("<h3>Q18</h3>Occurrences of 'the': " + count + "<br>");
