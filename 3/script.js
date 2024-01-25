const bici = [
  { nome: "Bianchi", peso: 10 },
  { nome: "Trek", peso: 12 },
  { nome: "Cannondale", peso: 9 },
  { nome: "Specialized", peso: 11 },
];

let leggera = bici[0].weight;
bici.forEach(({ peso, nome }) => {
  if (peso < leggera) {
    leggera = `${nome} : ${peso}`;
  }
});

console.log("La bici più leggera è: " + leggera);
