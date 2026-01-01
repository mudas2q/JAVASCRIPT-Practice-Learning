//1️⃣. ( <main> Tag )---
const main = document.createElement("main");
main.style.fontFamily = "sans-serif";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.minHeight = "100vh";
main.style.background = "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)";
document.body.append(main);

//2️⃣. ( <div> Tag )---
const div = document.createElement("div");
div.style.height = "83vh";
div.style.width = "70%";
div.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 20px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
div.style.backgroundColor = "white";
div.style.borderRadius = "2rem";
main.append(div);

//3️⃣. ( <input> Tag )---
const input = document.createElement("input");
input.style.width = "46%";
input.style.padding = "0.33rem 0.80rem";
input.style.fontSize = "1.22rem";
input.style.fontWeight = "600";
input.style.margin = "1rem 2rem";
input.style.borderRadius = "1rem";
input.style.border = "4px solid rgba(0, 243, 203, 1)";
input.style.outline = "none";



//4️⃣. ( <button> Tag )---
const addbtn = document.createElement("button");
addbtn.textContent = "Add Task";
addbtn.style.padding = "0.50rem 1.6rem";
addbtn.style.fontSize = "1.2rem";
addbtn.style.fontWeight = "600";
addbtn.style.border = "none";
addbtn.style.backgroundColor = "#00ffd5";
addbtn.style.color = "#000";
addbtn.style.boxShadow = "0 0 10px rgba(0, 255, 213, 0.5), 0 0 20px rgba(0, 255, 213, 0.3)";
addbtn.style.borderRadius = "1rem";
addbtn.style.margin = "1rem";


//5️⃣. ( <Button> EVENT-Listener )---
addbtn.addEventListener("click", function () {
    if(input.value && !(input.value.trim() === "")){
        // 4. Create ( CREATE H3 Tag )---
         const text = document.createElement("h3");
        text.textContent = input.value;
        input.value = "";

        // 5. ( REMOVE TEXT )
        const remove = document.createElement("button");
        remove.textContent = "Remove Task"
        text.append(remove)

        remove.addEventListener("click", function () {
            text.remove();
        });
    }
    

});

div.append(input, addbtn);

