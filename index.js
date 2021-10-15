var readlineSync = require("readline-sync");

function welcome() {
 var userName = readlineSync.question("Hello, type in your name ");

  console.log("~@ WELCOME " + userName + " TO THE DISNEY TRIVIA @~");
  game(userName);
}
console.log(" ");
var score = 0;

var highScores = {
    name: "Niharika",
    score: 5,
}

// array of objects
var questions = [{
  question: "How many brothers does Prince Hans of the Southern Isles have in Frozen?  ",
  options: {
    a: "6",
    b: "12",
  },
  answer: "b"
}, 
{
  question: "Which one of these ISN'T one of the seven dwarfs? ",
  options: {
    a: "Jumpy",
    b: "Bashful",
  },
  answer: "a"
},
{
  question: "What's the name of Belle's father in Beauty and the Beast? ",
  options: {
    a: "Maurice",
    b: "Timothy",
  },
  answer: "a"
},
{
  question: "What's Simba's mother's name? ",
  options: {
    a: "Nala",
    b: "Sarabi",
  },
  answer: "b"
},
{
  question: "What's the name of Snow White's prince?  ",
  options: {
    a: "Prince Philip",
    b: "Prince Florian",
  },
  answer: "b"
},
{
  question: "Who was the first Disney princess?  ",
    options: {
      a: "Snow White",
      b: "Cinderella",
    },
    answer: "a"
  },
{
  question: "What is the first Pixar movie?  ",
    options: {
      a: "A Bug's Life",
      b: "Toy Story",
    },
    answer: "b"
  },
{
  question: "What does the enchanted cake in the movie Brave turn Merida's mother into? ",
    options: {
      a: "A bear",
      b: "A cat",
    },
    answer: "a"
  },
  
];

// play function
function play(question, answer, options) {
  console.log(question);
  
  for(const key in options){
    console.log(`${key}  : ${options[key]}`);
  }
    
  var userAnswer = readlineSync.question("Choose you option: ");

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!!");
    score = score + 1;
  }
  else {
    console.log("Wrong!!");
  }

  console.log("*--------------------------*")
  console.log("current score: ", score);
  console.log("*--------------------------*")
}

function game(userName) {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
  }
  showScores(userName);
}

function showScores(userName) {
  console.log("WOW! Your SCORE is ", score);

  if(highScores.score <= score)
  {
    highScores.name = userName;
    highScores.score = score;
  }
  console.log("Check out the high scores!!");
  console.log(highScores.name, " : ", highScores.score);
}

welcome();



