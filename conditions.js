//if and if-else statment
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

let num = 10;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


//nested if-else
let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful!");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("Invalid username.");
}

//switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satuerday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

