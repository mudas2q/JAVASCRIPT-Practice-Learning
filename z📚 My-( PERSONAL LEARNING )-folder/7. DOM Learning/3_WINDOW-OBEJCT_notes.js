/* 
════════════════════════════════════════════════════════════════════════════
1️⃣. WHY WINDOW OBJECT IS IMPORTANT (Beginner Friendly – QWER NOTES)
════════════════════════════════════════════════════════════════════════════

Sab se pehle ek simple baat yaad rakho:

👉 JavaScript akeli kuch nahi kar sakti
👉 Browser JavaScript ko power deta hai
👉 Ye power JavaScript ko WINDOW OBJECT ke zariye milti hai

Agar window object nahi hota:
- alert nahi hota
- prompt nahi hota
- page reload nahi hota
- URL change nahi hota
- DOM access nahi hota

Is liye window object seekhna LAZMI hai
*/


/* 
════════════════════════════════════════════════════════════════════════════
2️⃣. WINDOW OBJECT KYA HAI? (Simple Definition)
════════════════════════════════════════════════════════════════════════════

Window object = Browser ka MAIN OBJECT

Simple words me:
- Browser ka jo bhi control hota hai
- JavaScript ko jo bhi permissions milti hain
- Wo sab window object ke andar hoti hain

Is liye window ko ROOT / PARENT object bhi kehte hain
*/


/* 
════════════════════════════════════════════════════════════════════════════
3️⃣. REAL LIFE EXAMPLE (Easy Samajhne ke liye)
════════════════════════════════════════════════════════════════════════════

Browser = Ghar
Window Object = Ghar ka Owner
JavaScript = Worker

Worker (JS) kuch bhi tabhi karega jab Owner (Window) ijazat dega

Is liye:
- alert = window deta hai
- prompt = window deta hai
- document = window deta hai
*/


/* 
════════════════════════════════════════════════════════════════════════════
4️⃣. KYA HUM PEHLE SE WINDOW USE KAR RAHE HAIN?
════════════════════════════════════════════════════════════════════════════

Haan ✔️

Jab tum ye likhte ho:
*/

alert("Hello");
prompt("Enter your name");

/*
Asal me JavaScript ye karta hai:
*/

window.alert("Hello");
window.prompt("Enter your name");

/*
JavaScript automatically "window." likhna skip kar deta hai
Is liye beginners ko pata nahi chalta
*/


/* 
════════════════════════════════════════════════════════════════════════════
5️⃣. WINDOW OBJECT SE KYA KYA MILTA HAI?
════════════════════════════════════════════════════════════════════════════

Window object hume deta hai:

- alert, prompt, confirm
- document (DOM)
- location (URL control)
- history (back / forward)
- screen (screen size)
- console

Ye sab browser-related cheezen hain
Is liye inka ghar = window object
*/


/* 
════════════════════════════════════════════════════════════════════════════
6️⃣. DOM SEEKHNE SE PEHLE WINDOW KYU ZARURI HAI?
════════════════════════════════════════════════════════════════════════════

Flow yaad rakho:

Window
  └── Document
        └── HTML
              └── Elements

Agar window clear nahi:
- document samajh nahi aata
- DOM confusing lagta hai
- errors ka reason samajh nahi aata
*/


/* 
════════════════════════════════════════════════════════════════════════════
7️⃣. REAL WEBSITES ME WINDOW KA USE
════════════════════════════════════════════════════════════════════════════

Real projects me window use hota hai:

- Page load hone par kaam
- Scroll detect karna
- Screen size check karna
- User ko redirect karna
- Login ke baad page change

Ye sab bina window ke impossible hai
*/


/* 
════════════════════════════════════════════════════════════════════════════
8️⃣. INTERNSHIP & INTERVIEW POINT
════════════════════════════════════════════════════════════════════════════

Interview me common sawal:

- alert kis object ka method hai?
- document kahan se aata hai?
- window aur document me difference?

Agar window nahi aata:
- confidence down
- concept weak
*/


/* 
════════════════════════════════════════════════════════════════════════════
9️⃣. ONE LINE GOLDEN RULE (YAAD RAKHO)
════════════════════════════════════════════════════════════════════════════

👉 JavaScript browser me jo kuch bhi karti hai,
👉 wo sab WINDOW OBJECT ke through karti hai
*/


/* 
════════════════════════════════════════════════════════════════════════════
🔟. FINAL CONCLUSION (Beginner Mindset Fix)
════════════════════════════════════════════════════════════════════════════

Agar tum:
- DOM seekhna chahte ho
- Real website banana chahte ho
- Professional developer banna chahte ho

To:
WINDOW OBJECT skip karna = future problems

Is liye pehle window samjho
Phir document
Phir DOM
Phir advanced JavaScript

Yahi sahi learning order hai ✔️
*/

//second page:
/*════════════════════════════════════════════════════════════════════════════
1️⃣. JavaScript WINDOW OBJECT — 
════════════════════════════════════════════════════════════════════════════

Roman Urdu me complete lifetime reference notes.
Ye file aap seedha GitHub me save kar sakte ho.
Agar future me bhool jao, sirf ye file padh kar concept clear ho jayega.

IMPORTANT BAAT:
• JavaScript khud se powerful nahi hoti
• Browser JavaScript ko power deta hai
• Ye power WINDOW OBJECT ke zariye milti hai
*/


/*════════════════════════════════════════════════════════════════════════════
2️⃣. What is Window Object?
════════════════════════════════════════════════════════════════════════════

Window Object browser ka ROOT / TOP-LEVEL object hota hai.

Simple alfaaz me:
• Window = Browser
• JavaScript browser ke andar chalti hai
• Browser JavaScript ko jo bhi features deta hai, wo sab window ke through deta hai

Is liye:
JavaScript + Browser = Window Object
*/


/*════════════════════════════════════════════════════════════════════════════
3️⃣. Why Window Object is Needed?
════════════════════════════════════════════════════════════════════════════

Agar window object na ho:
• alert nahi aa sakta
• prompt se input nahi le sakte
• HTML (DOM) access nahi kar sakte
• URL change nahi kar sakte
• Screen size nahi jaan sakte

Conclusion:
Window object JavaScript aur Browser ke darmiyan BRIDGE hai
*/


/*════════════════════════════════════════════════════════════════════════════
4️⃣. Window Object Automatically Available (Global Object)
════════════════════════════════════════════════════════════════════════════

Browser jab JS run karta hai:
• Sab se pehle window object create hota hai
• Phir JS code run hota hai

Is liye:
• Hume window likhne ki zarurat nahi hoti
• Sab cheeze direct accessible hoti hain
*/


alert("Hello"); 
window.alert("Hello"); 

/* Dono bilkul same hain
Reason:
alert() asal me window.alert() hai
*/


/*════════════════════════════════════════════════════════════════════════════
5️⃣. Important Window Methods (Basic)
════════════════════════════════════════════════════════════════════════════

Window ke andar bohot se built-in methods hote hain
Sab se common 3 ye hain:
*/


prompt("Apna naam likho"); 
confirm("Kya aap continue karna chahte ho?"); 

/* prompt:
• user se input leta hai (string return karta hai)

confirm:
• OK = true
• Cancel = false
*/


/*════════════════════════════════════════════════════════════════════════════
6️⃣. Window Object ke Types (Logical Grouping)
════════════════════════════════════════════════════════════════════════════

Window object ke features ko logically groups me samjha jata hai:

1) Dialog Methods
2) DOM Access
3) Location & History
4) Screen & Size
5) Timing Functions
6) Events

Ye classification real-life projects me bohot help karti hai
*/


/*════════════════════════════════════════════════════════════════════════════
7️⃣. Window & Document Relationship (MOST IMPORTANT)
════════════════════════════════════════════════════════════════════════════

Hierarchy yaad rakho:

Window
 └── Document
      └── HTML
           └── Body
                └── Elements

Meaning:
• Document HTML page hota hai
• Document window ke andar hota hai
*/


console.log(window.document); 

/* Agar window samajh aa gaya,
to DOM automatically easy ho jata hai
*/


/*════════════════════════════════════════════════════════════════════════════
8️⃣. Window.location (URL Control)
════════════════════════════════════════════════════════════════════════════

location object:
• current page ki URL info deta hai
• navigation control karta hai

Real-life use:
• redirect
• reload
• routing
*/


console.log(window.location.href); 
console.log(window.location.protocol); 
console.log(window.location.host); 

/* Page reload */
window.location.reload(); 


/*════════════════════════════════════════════════════════════════════════════
9️⃣. Window.history (Back & Forward)
════════════════════════════════════════════════════════════════════════════

history object:
• browser navigation handle karta hai

Real-life use:
• SPA (Single Page Apps)
• custom back buttons
*/


window.history.back(); 
window.history.forward(); 


/*════════════════════════════════════════════════════════════════════════════
🔟. Window.screen & Window Size
════════════════════════════════════════════════════════════════════════════

screen:
• user ki device screen info deta hai

innerWidth / innerHeight:
• browser viewport ka size batata hai

Responsive design me bohot important
*/


console.log(window.screen.width); 
console.log(window.screen.height); 
console.log(window.innerWidth); 
console.log(window.innerHeight); 


/*════════════════════════════════════════════════════════════════════════════
1️⃣1️⃣. Window Timing Functions (Async Behavior)
════════════════════════════════════════════════════════════════════════════

setTimeout:
• delay ke baad code run karta hai

setInterval:
• bar bar fixed time pe code run karta hai
*/


window.setTimeout(() => {
  alert("3 second baad message");
}, 3000);


let counter = 1;
let intervalId = window.setInterval(() => {
  console.log(counter);
  counter++;
  if (counter > 5) window.clearInterval(intervalId);
}, 1000);


/*════════════════════════════════════════════════════════════════════════════
1️⃣2️⃣. Window Events (Real User Interaction)
════════════════════════════════════════════════════════════════════════════

Events ka matlab:
• user kya kar raha hai (scroll, load, resize)

Real-life:
• animations
• lazy loading
• UX improvements
*/


window.onload = () => {
  console.log("Page fully load ho gaya");
};

window.addEventListener("scroll", () => {
  console.log("User scroll kar raha hai");
});


/*════════════════════════════════════════════════════════════════════════════
1️⃣3️⃣. Best Practices (Recommended Way)
════════════════════════════════════════════════════════════════════════════

• window keyword tab likho jab clarity chahiye
• global variables kam rakho
• window ko directly overwrite mat karo
• events ke liye addEventListener use karo
• DOM se pehle window samjho
*/


/*════════════════════════════════════════════════════════════════════════════
1️⃣4️⃣. Real-Life Usage Summary
════════════════════════════════════════════════════════════════════════════

Window object real projects me use hota hai:
• alerts & confirmations
• responsive layouts
• routing & navigation
• browser APIs access
• DOM manipulation start karne ke liye
*/


/*════════════════════════════════════════════════════════════════════════════
1️⃣5️⃣. Final Revision (One-Glance Memory)
════════════════════════════════════════════════════════════════════════════

✔ Window = Browser
✔ JavaScript ko browser powers deta hai
✔ alert/prompt/confirm window ka part hain
✔ document window ke andar hota hai
✔ DOM start hota hai window se
✔ Professional JS ke liye window MUST hai
*/
