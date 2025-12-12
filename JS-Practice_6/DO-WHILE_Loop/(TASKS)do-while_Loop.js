//=============================================
//--[ TASK: 1️⃣ ] -(Print numbers 1 to 5).
//=============================================

let i = 1;
do {
    console.log(`${i}`);
    i++;
} while (i <= 5);

//=============================================
//--[ TASK: 2️⃣ ] -(Ask user for a number and print "Hello" that many times)
//=============================================

const repeatCount = Number(prompt("Enter how many times you want to print 'Hello':"));
let counter = 1;
do {
    console.log(`${counter} Hello`);
    counter++;
} while (counter <= repeatCount);

//=============================================
//--[ TASK: 3️⃣ ] -(Print menu Loop:- once, then repeat if user types "yes".)
//=============================================

let userChoice;
do {
    alert(`1. Pizza \n2. Burger \n3. Drinks`);
    userChoice = prompt("Do you want to see the menu again? yes/no").toLowerCase();
} while (userChoice === "yes");
alert("Thank you! Goodbye! 👋");

//=============================================
//--[ TASK: 4️⃣ ] -(Eat at least one candy, then keep eating as long as the user types "more" or yes)
//=============================================

let userChoice2;
do {
    alert("🍬 You ate a candy!");
    userChoice2 = prompt("Do you want more? (yes / more / no)")?.toLowerCase().trim();
} while (userChoice2 === "yes" || userChoice2 === "more");
alert("No more candy. Program ended.");

//.trim() -> Remove extra spaces.
// .toLowerCase() -> Convert to lowercase (YES → yes). ye tabhi kaam karega jab sabhi text small likhe ho.

//=============================================
//--[ TASK: 5️⃣ ] -(User must type "Khulja sim sim" to unlock)
//=============================================

let userInput;
do {
    userInput = prompt("Say the magic word")?.toLowerCase().trim();
    if (userInput !== "khulja sim sim") {
        alert("❌ Wrong word, try again!");
    }
} while (userInput !== "khulja sim sim");
alert("✨ The door is open!");