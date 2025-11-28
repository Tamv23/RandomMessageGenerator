
// script.js
// Motivation generator with console.log tracing for learning

// helper: returns integer from 0 .. num-1
function generateRandomNumber(num) {
  console.log(`generateRandomNumber called with num = ${num}`);
  const result = Math.floor(Math.random() * num);
  console.log(` -> generated index: ${result}`);
  return result;
}

/* example data (make sure this is present somewhere in your file) */
const collectiveQuotes = {
  Mindset: [
    "You can handle what comes today.",
    "Small progress is still progress — keep going.",
    "Choose growth over comfort — one step at a time."
  ],
  Physical: [
    "Take a short walk and breathe deeply.",
    "Move your body for 10 minutes — your future self will thank you.",
    "Drink a glass of water and stretch."
  ],
  Spiritual: [
    "Pause and be thankful for one small thing.",
    "Breathe slowly for one minute and release tension.",
    "Trust your path — you're learning as you go."
  ]
};

/*
  Store message components in an object.
  Each property is a category (Mindset, Physical, Spiritual).
  Each property value is an array of possible lines.
*/

function buildPersonalPositiveMessage(quotesObject) {
  console.log("Starting to build message...");
  const personalPositive = [];
  const keys = Object.keys(quotesObject);  // [ "Mindset", "Physical", "Spiritual" ]
  console.log("Found categories:", keys);

  keys.forEach((key) => {
    console.log(`\nCategory: ${key}`);
    const options = quotesObject[key]; 
    console.log("Options count:", options.length); // number of quotes in that category

    if (!Array.isArray(options) || options.length === 0) {  // safety
      console.log("No options — skipping.");
      return;
    }

    const randomIndex = generateRandomNumber(options.length);
    const chosen = options[randomIndex];
    console.log("Chosen quote:", chosen); 

    personalPositive.push(`${key}: ${chosen}`);   // label + quote
    console.log("personalPositive now:", personalPositive);
  });

  const final = personalPositive.join("\n");  // returns multi-line string
  console.log("\nFinished building message.");
  return final;
}

console.log(buildPersonalPositiveMessage(collectiveQuotes));


// output: 
//  ['Mindset: Choose growth over comfort — one step at a time.', 
// 'Physical: Drink a glass of water and stretch.', 
// 'Spiritual: Breathe slowly for one minute and release tension.']

/* Object.keys(obj) returns an array of strings (the property names). Use it to loop over property names.

obj[key] (bracket notation) reads a property when key is a variable.

Array.isArray(x) checks that the thing is an array (safer than assuming).

push() modifies the array in place (no return value you need).

join("\n") converts an array into a string with a newline between each element.*/