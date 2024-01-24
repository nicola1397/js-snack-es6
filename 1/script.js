const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

let tableIndex = 0;
const vipTables = vips.map((vip) => {
  tableIndex++;
  return {
    table: "Tavolo di " + vip,
    guestName: vip,
    tableNumber: tableIndex,
  };
});
console.table(vipTables);
