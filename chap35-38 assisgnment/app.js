// 1. Current Date & Time
function showDateTime() {
    document.write("<h3>1. Current Date & Time</h3>");
    document.write(new Date() + "<br><br>");
}
showDateTime();


// 2. Greet User
function greetUser(firstName, lastName) {
    document.write("<h3>2. Greeting User</h3>");
    document.write("Hello " + firstName + " " + lastName + "!<br><br>");
}
greetUser("Kaneez", "Fatima");


// 3. Add Two Numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("<h3>3. Addition</h3>");
document.write("Sum: " + addNumbers(5, 7) + "<br><br>");


// 4. Calculator
function calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    else if (operator === "-") return num1 - num2;
    else if (operator === "*") return num1 * num2;
    else if (operator === "/") return num1 / num2;
    else return "Invalid Operator";
}
document.write("<h3>4. Calculator</h3>");
document.write("Result: " + calculator(10, 5, "*") + "<br><br>");


// 5. Square Function
function square(num) {
    return num * num;
}
document.write("<h3>5. Square</h3>");
document.write("Square: " + square(4) + "<br><br>");


// 6. Factorial
function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
document.write("<h3>6. Factorial</h3>");
document.write("Factorial: " + factorial(5) + "<br><br>");


// 7. Counting Function
function counting(start, end) {
    document.write("<h3>7. Counting</h3>");
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br><br>");
}
counting(1, 10);


// 8. Hypotenuse (Nested Function)
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hypotenuse;
}

document.write("<h3>8. Hypotenuse</h3>");
document.write("Hypotenuse: " + calculateHypotenuse(3, 4) + "<br><br>");


// 9. Area of Rectangle
function rectangleArea(width, height) {
    return width * height;
}

document.write("<h3>9. Rectangle Area</h3>");
document.write("Area (values): " + rectangleArea(5, 6) + "<br>");

var w = 7, h = 8;
document.write("Area (variables): " + rectangleArea(w, h) + "<br><br>");


// 10. Palindrome Check
function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

document.write("<h3>10. Palindrome</h3>");
document.write("madam: " + isPalindrome("madam") + "<br><br>");


// 11. Capitalize First Letter of Each Word
function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

document.write("<h3>11. Capitalize Words</h3>");
document.write(capitalizeWords("the quick brown fox") + "<br><br>");


// 12. Longest Word
function findLongestWord(str) {
    var words = str.split(" ");
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

document.write("<h3>12. Longest Word</h3>");
document.write(findLongestWord("Web Development Tutorial") + "<br><br>");


// 13. Count Letter Occurrences
function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

document.write("<h3>13. Count Letter</h3>");
document.write("Occurrences: " + countLetter("JSResourceS.com", "o") + "<br><br>");


// 14. Geometrizer

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("<h3>14. Circle</h3>");
    document.write("The circumference is " + circumference + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area + "<br>");
}

calcCircumference(7);
calcArea(7);
