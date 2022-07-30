// brings in the readline module to access the command line
const readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let words = [
  "silence",
  "visual",
  "other",
  "makeup",
  "divide",
  "shock",
  "private",
  "wife",
  "mosquito",
  "emphasis",
  "deficit",
  "dependence",
  "comprehensive",
  "couple",
  "offensive",
  "arrow",
  "update",
  "eat",
  "front",
  "bite",
  "wilderness",
  "efflux",
  "jump",
  "master",
  "pan",
  "journal",
  "soil",
  "resolution",
  "cupboard",
  "tense",
  "quality",
  "thesis",
  "strap",
  "decrease",
  "swallow",
  "dough",
  "production",
  "training",
  "clothes",
  "infection",
  "funeral",
  "allow",
  "kick",
  "revolution",
  "sympathetic",
  "mosaic",
  "address",
  "build",
  "upset",
];

const randomWord = () => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 48);
  };
  let word = words[getRandomInt()];
  return word;
};

let word = randomWord().split("");
let correctWords = [];
let turns = 7;
for (let i = 0; i < word.length; i++) {
  correctWords.push("_");
}

const hangMan = (letter) => {
  if (word.includes(letter)) {
    console.log(letter, "exist inside this word", word);
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctWords[i] = letter;
      }
    }
  } else {
      turns--;
      if (turns === 0) {
        return console.log("You LOSE");
      }

    console.log("incorrect guess. You have this many turns left", turns);
  }
};

const getPrompt = () => {
  console.log("getting prompt");
  rl.question("guess a letter: ", (letter) => {
    console.log("this is the answer;", word);
    hangMan(letter);
    console.log("this is your guess;", correctWords);

    if (turns === 0) {
      return;
    }

    getPrompt();
  });
};

getPrompt();
