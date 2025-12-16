//========================================
// 1️⃣. [ Create a function greet(name) that prints "Hello <name>". ]
//========================================

function greet(yourname) {
    console.log(`Hello, ${yourname}`);
}
greet("Mudasir");

//========================================
// 2️⃣. [ Create a function add(a, b) → return sum. ]
//========================================

function add(a, b) {
    return a + b;
}
const calculate_plus = add(10, 10);
console.log(`${calculate_plus}`); // (Output):- 20

//========================================
// 3️⃣. [ Create a function maxNumber(a, b, c) that returns the largest number. ]-
//========================================


function maxNumber(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxNumber(13, 11, 11));   // Output: 13
console.log(maxNumber(15, 8, 22));  // Output: 22
console.log(maxNumber(-5, -2, -10)); // Output: -2

//========================================
// 3️⃣. [ Alternative method without: 'Math.max' ]-
//========================================

function maxNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(maxNumber(5, 10, 3));   // Output: 10
console.log(maxNumber(15, 8, 22));  // Output: 22

//========================================
// 3️⃣. [ Alternative with Ternary Operator ]-
//========================================

function maxNumber(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maxNumber(4, 4, 5)); // Output: 5

//========================================
// 3️⃣. [ Arrow Function Version (Modern ES6)]-
//========================================

const maxNumber = (a, b, c) => Math.max(a, b, c);
console.log(maxNumber(10, 25, 15)); // 25


//========================================
// 4️⃣. [ Create a function calculateBill(price, quantity) that returns total amount ]-
//========================================

function calculateBill(price, quantity) {
    return price * quantity;
}
const totolamount = calculateBill(100, 2);
console.log(totolamount); // Output: 200

//========================================
// 5️⃣. [ Lucky Number Generator ]-
//========================================

function luckyNumberGenerator(name) {
    const luckyNumber = Math.floor(Math.random() * 10) + 1;
    const message = `${name}, your lucky number is ${luckyNumber}!`;
    return message;
}
const userName = prompt("Enter your name:");
const result = luckyNumberGenerator(userName);
console.log(result);

//========================================
// 5️⃣. [ ALternative ]- Arrow Function--
//========================================

const luckyNumberGenerator = (name) => `${name}, your lucky number is ${Math.floor(Math.random() * 10) + 1}!`;
console.log(luckyNumberGenerator("Mudasir")); // e.g., "Mudasir, your lucky number is 3!"

//==========================================
// 6️⃣. [ Tea or Coffee Maker ]---
//==========================================

function drinks(drink){
    console.log(`Your ${drink} is Ready!`);
}
drinks("tea");


//___[ Alternative: 1]______:
function drinks(drink){
    let message = `Your ${drink} is Ready!`;
    return message;
}
const order_drinks = drinks("tea");
console.log(order_drinks)


//___[ Alternative: 2 ]____(Recommended)___:
function drinks(drink) {
    if (drink === "tea") {
        return "☕ Your tea is ready!";
    } else if (drink === "coffee") {
        return "🍵 Your coffee is ready!";
    } else {
        return "❌ Sorry, we only serve tea or coffee.";
    }
}
const orderDrink = drinks("tea");
console.log(orderDrink);


//___[ Alternative: 3 ]________:
function drinks(drink){
    return `Your ${drink} is Ready!`;
}
const order_drink = drinks("tea");
console.log(order_drink);

//===========================================
// 7️⃣. [ Password Strength Checker ]----
//===========================================

function checkPasswordStrength(password) {
    if (password.length < 4) {
        return "Weak";
    }
    else if (password.length < 7) {
        return "Medium";
    }
    else {
        return "Strong";
    }
}
console.log(checkPasswordStrength("123"));        // Weak
console.log(checkPasswordStrength("123456"));     // Medium
console.log(checkPasswordStrength("1234567"));  // Strong
