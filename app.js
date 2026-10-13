/* loop: A block of code that excuate again and again: */
// Beginner Level
/* Task No 1: Write a program that prints numbers from 1 to 20 */
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

/* Task No 2: Print all even numbers between 1 and 50. */
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log("Even ", i);
    }
}
/* Task No 3: Create a countdown from 10 to 1, then print "Happy New Year!". */
for (let i = 10; i > 0; i--) {
    console.log("Happy New Year!", i);
}

/* Task No 4: Ask the user for a number and print its multiplication table from 1 to 10. */
let num = Number(prompt("Enter any Table"))
for (let i = 1; i <= 10; i++) {
    console.log(num + "*" + i + "=" + i * num);

}

/* Task No 5:  Calculate the sum of numbers from 1 to 100.*/
let res = 0;
for (i = 1; i <= 100; i++) {
    res = res + i;
}
console.log(res);

/* Task No 6: Keep asking the user to enter a password until they enter the correct password. */
const password = Number(prompt("Enter 4 digits correct Password!"));
while (password === 2345) {
    console.log("Correct Password");
    break;
}
/* Task No 6: Keep asking the user to enter a number until they enter a positive number. */
let positiveNum = Number(prompt("Enter Positive Number!"))
while (positiveNum > 0) {
    console.log("Correct Positive Number!");
    break;
}

// Intermediate Level
/* Task No 7: Print every mark and calculate the total marks */
let marks = [78, 92, 65, 88, 55, 73];
let sum = 0;
for (let mark of marks) {
    sum = mark + sum;
    console.log("Marks", mark);

}
console.log("Total", sum);

/* Task No 8: Calculate the total price of all products. */
let prices = [500, 1200, 350, 800, 150];
let total = 0;
for (let price of prices) {
    total = price + total;
}
console.log("Total Products:", total);

/* Task No 9: Print each student's name with:*/
let students = ["Ali", "Ahmed", "Sara", "Ayesha", "Hamza"]
for (let student of students) {
    console.log("Hello  " + student);
}
/* Task No 10: Search for "Keyboard" and print: */
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
if (products.includes("Keyboard")) {
    console.log("product Found!");
}

/* Task No 11: You have an object Print every property name and its value */

let student = {
    name: " Kashif",
    age: 21,
    course: "  Web Development",
    city: "  Peshawar"
}
for (let key in student) {
    console.log(key + student[key]);
}

/* Task No 12:If you have a word Count how many vowels are present */
let word = "JavaScript";
for (let i = 0; i <= word.length; i++) {
    if (word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u") {
        console.log(word[i]);

    }
};

/* Task No 13: Find the largest number without using Math.max(). */
let numbers = [12, 45, 7, 89, 23, 56];
let largest = 0;
for (let number of numbers) {
    if (number > largest) {
        largest = number;

    }
}
console.log(largest);

/*Task No 14:  ATM System Create a program that asks the user for a PIN. */
let correctPIN = 1234;
let isAccess = false;
for (let attempt = 1; attempt <= 3; attempt++) {
    let enterPIN = Number(prompt("Enter Correct PIN!"))
    if (correctPIN === enterPIN) {
        console.log("Access Grant!");
        isAccess = true;
        break;
    }
    else {
        console.log("Incorrect PIN " + (3 - attempt));

    }
}
if (isAccess === false) {
    console.log("Locked Account!");

}
/* Task No 15: Keep asking the user to guess until they find the correct number. */

let secretNum = 7;
while (true) {
    let enterNum = Number(prompt("Guess Any Number!"))
    if (enterNum > secretNum) {
        alert("Too High");
    }
    else if (enterNum < secretNum) {
        alert("Too Low!");
    }
    else if (enterNum === secretNum) {
        alert("Yes That's is Correct!");
        break;
    }
    else {
        alert("Invalid data");

        break;
    }
}

/* Task No 16: Display every employee and salary */
let employees = {
    Kashif: 12000,
    Basit: 10000,
    Yousaf: 13000,
    Abid: 1500,
    Ahmad: 7000,
}
for (let employee in employees) {
    console.log(` This is the ${employee} salary ${employees[employee]}`);
}
/* Create a simple login system. */
let correctUsername = "admin";
let correctPassword = 12345;
let isLogin = false;
for (let i = 1; i <= 3; i++) {
    let username = prompt("Enter User Name")
    let password = Number(prompt("Enter correct Password"))
    if (username === correctUsername && password === correctPassword) {
        console.log("Login Successfully!");
        isLogin = true;
        break;
    }
    else {
        console.log("Invalid credential!");
    }
}
if (isLogin === false) {
    console.log("You reachout!");

}
/* Task No 17: Create a menu-driven program that repeatedly displays these options: */
let choice;

while (true) {
    console.log("===== STUDENT MANAGEMENT SYSTEM =====");
    console.log("1. Add Student");
    console.log("2. View Students");
    console.log("3. Delete Student");
    console.log("4. Exit");

    choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            console.log("Add Student Selected");
            break;

        case "2":
            console.log("View Students Selected");
            break;

        case "3":
            console.log("Delete Student Selected");
            break;

        case "4":
            console.log("Exiting Program...");
            break;

        default:
            console.log("Invalid Choice");
    }

    if (choice === "4") {
        break;
    }
}

console.log("Program Ended");