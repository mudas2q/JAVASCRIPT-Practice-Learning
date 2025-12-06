// 1.( DO WHILE LOOP ) -Check Pin---.
let pin = 123;
let user;
do {
  user = +prompt(`Enter Your pin? ${pin}`);
} while (pin !== user);

console.log("Correct Pin Access Granted ✅");
alert("Correct Pin Access Granted ✅");
document.writeln(`Correct Pin ${pin} Access Granted ✅`);