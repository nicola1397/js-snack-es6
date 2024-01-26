const products = [
  { title: "Mela", price: 2.3 },
  { title: "Banana", price: 1.5 },
  { title: "Mango", price: 2 },
  { title: "Pesca", price: 1.8 },
  { title: "Pera", price: 1.5 },
  { title: "Arancia", price: 2.2 },
];

let frutta = prompt("Quanta frutta vuoi nella macedonia?");
let totalPrice = 0;
if (isNaN(parseInt(frutta))) {
  frutta = prompt(
    "Inserisci un numero valido.Quanta frutta vuoi nella macedonia?"
  );
}

for (let i = 0; i < frutta; i++) {
  let index = Math.floor(Math.random() * (products.length - 0));
  totalPrice = totalPrice + products[index].price;
}

console.log("Il tuo frullato costerà:" + totalPrice + "€");
