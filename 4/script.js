const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];
let stats = [];

teams.forEach((team) => {
  team.score = Math.floor(Math.random() * 100 + 1);
  team.foul = Math.floor(Math.random() * 100 + 1);
});

stats = teams.map(({ score, foul }) => `${score}: ${foul}`);

console.log(teams);
console.log(stats);
