//=============================
// 1️⃣. [Create an array countries with 5 countries and print each one.]
//=============================

let countries = ["Pakistan 🇵🇰", "China 🇨🇳", "🇨🇭 Switzerland", "🇳🇴 Norway", "🇫🇮 Finland:"];
console.log(countries[0]);

//=============================
// 2️⃣. (Add a new country using push().)
//=============================

let addCountry = ["Switzerland", "Norway"];
addCountry.push("Finland");
console.log(addCountry);

//==============================
// 3️⃣. (Remove last country using pop().)
//==============================

let remove_country = ["Pakistan", "China", "North Korea"];
remove_country.pop();
console.log(remove_country);

//===============================
// 4️⃣. (Create an array of 50 numbers and print only even numbers.)
//===============================

let numbers = [];
for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(numbers[index]);
    }
}

//==============================
// 5️⃣. (Use includes() to check if “Turkey” is in your countries array.)
//==============================

let c = ["Pakistan", "Turkey", "UAE"];

if (c.includes("Turkey")) {
    console.log("Yes Turkey Found!");
} else {
    console.log("Not Found");
}
