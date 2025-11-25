// 1.[ Start ]---
let a = 5;
let b = 10;

if ( (a+b) > 20){
    console.log(`✅ Yes ${a+b} is Greater than ${b}`); // False
}else {
    console.log(`❌ No ${a+b} is Not Greater than ${b}`);   // TRUE = Answer is: "❌ No 15 is Not Greater than 10"
}
// Ternary Operator
console.log(a>b ?(b - a) : (a + b)); // 15
// 1.[ END ]---