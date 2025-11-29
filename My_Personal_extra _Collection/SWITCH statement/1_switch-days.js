//1. 👇 BASIC SYNTAX ( SWITCH STATEMENT )----
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");  // ANSWER IS 'Wednesday'.
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend 🎉");
}
/*1. Switch (value) 👈 Jis Variable ki value ko comare karna ho.
  2. { } 👈 Curly Braces (Code Block) .
  3. break; 👈 Code Agay Execuation ko Rokne ke liye.
  4. case value: 👈 Agar Value === Same hui to ye Block chalega.
  5. Default: 👈 Fall Back - agar uppar wale koi Case march na kare to ye chalega.
*/

// 2. ( MULTIPLE CASES )------
const color = "red";

switch (color) {
  case "crimson":
  case "maroon":
  case "red":
    console.log("This is a shade of Red.");  // this code execute.
    break;
  default:
    console.log("Unknown Other Color");
}




