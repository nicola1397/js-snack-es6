const vocali = ["a", "e", "i", "o", "u"];

let userInput = prompt("Scrivi qualcosa");
let counter = 0;
for (let i = 0; i < userInput.length; i++) {
  if (
    userInput[i] == "a" ||
    userInput[i] == "e" ||
    userInput[i] == "i" ||
    userInput[i] == "o" ||
    userInput[i] == "u"
  ) {
    counter++;
  }
}
console.log(counter);
// const vocal = userInput.some((element) => {
//   return vocali.includes(element);
// });
