var quiz = {
  data: [
  {
    q: "How many brothers does Prince Hans of the Southern Isles have in Frozen?  ",
    o: {
      a: "6",
      b: "12",
    },
    a: "b"
  }, 
  {
    q: "Which one of these ISN'T one of the seven dwarfs? ",
    o: {
      a: "Jumpy",
      b: "Bashful",
    },
    a: "a"
  },
  {
    q: "What's the name of Belle's father in Beauty and the Beast? ",
    o: {
      a: "Maurice",
      b: "Timothy",
    },
    a: "a"
  },
  {
    q: "What's Simba's mother's name? ",
    o: {
      a: "Nala",
      b: "Sarabi",
    },
    a: "b"
  },
  {
    q: "What's the name of Snow White's prince?  ",
    o: {
      a: "Prince Philip",
      b: "Prince Florian",
    },
    a: "b"},
  {
    q: "Who was the first Disney princess?  ",
      o: {
      a: "Snow White",
      b: "Cinderella",
      },
      a: "a"
  },
    {
      q: "What is the first Pixar movie?  ",
        o: {
          a: "A Bug's Life",
          b: "Toy Story",
        },
        a : "b"
      },
    {
      q: "What does the enchanted cake in the movie Brave turn Merida's mother into? ",
        o: {
          a: "A bear",
          b: "A cat",
        },
        a: "a"
  }
  ],
  hWrap: null, 
  hQn: null, 
  hAns: null, 
  now: 0,
  score: 0, 

  init: function(){
    quiz.hWrap = document.getElementById("quizWrap");
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    quiz.draw();
  },

  draw: function(){
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },

  select: function(){
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }

    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      
        else if(quiz.score<8 && quiz.score>4 ){
          quiz.hQn.innerHTML = `CONGRATS !! YOU HAVE SCORED ${quiz.score} OUT OF ${quiz.data.length}. KEEP WATCHING DISNEY.`;
          quiz.hAns.innerHTML = "";}
        else if(quiz.score===8){
          quiz.hQn.innerHTML = `HOORAY A TRUE DISNEY LOVER SPOTTED ! YOU HAVE SCORED ${quiz.score} OUT OF ${quiz.data.length}.`;
          quiz.hAns.innerHTML = "";}
        else{
            quiz.hQn.innerHTML = `UH-OH NOT-SO-GOOD ! YOU HAVE SCORED ${quiz.score} OUT OF ${quiz.data.length}.`;
            quiz.hAns.innerHTML = "";}
          
      },
     1000);
  },
};
window.addEventListener("load", quiz.init);


 


