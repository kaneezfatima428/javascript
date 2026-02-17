function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}

console.log("Power:", power(2, 3));

//
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

console.log(isLeapYear(2024));

// 
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log("Triangle Area:", triangleArea(3, 4, 5));

// 
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    var total = 300;
    var obtained = m1 + m2 + m3;
    return (obtained / total) * 100;
}

function mainFunction(m1, m2, m3) {
    console.log("Average:", average(m1, m2, m3));
    console.log("Percentage:", percentage(m1, m2, m3) + "%");
}

mainFunction(80, 70, 90);

// 
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(customIndexOf("Hello", "e"));

// 
function removeVowels(sentence) {
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i].toLowerCase();
        if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
            result += sentence[i];
        }
    }
    return result;
}

console.log(removeVowels("Hello World"));

// 
function countDoubleVowels(text) {
    var count = 0;
    var vowels = "aeiou";

    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
                break;
        }
    }
    return count;
}

console.log(countDoubleVowels("Pleases read this application and give me gratuity"));

// 
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

var distance = 5;

console.log("Meters:", toMeters(distance));
console.log("Feet:", toFeet(distance));
console.log("Inches:", toInches(distance));
console.log("Centimeters:", toCentimeters(distance));

// 
function overtimePay(hours) {
    if (hours > 40) {
        var overtimeHours = hours - 40;
        return overtimeHours * 12;
    } else {
        return 0;
    }
}

console.log("Overtime Pay:", overtimePay(45));

// 
function currencyNotes(amount) {
    var hundred = Math.floor(amount / 100);
    var remainder = amount % 100;

    var fifty = Math.floor(remainder / 50);
    remainder = remainder % 50;

    var ten = Math.floor(remainder / 10);

    console.log("100 Notes:", hundred);
    console.log("50 Notes:", fifty);
    console.log("10 Notes:", ten);
}

currencyNotes(880);
