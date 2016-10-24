//make better use of data objects for questions and answers
//fix questions
var Model = {
questions : [
  {
    text: "In which game did Super Mario make his first apperance?",
    choices: ["Mario Brothers", "Super Mario Brothers", "Donkey Kong", "Super Mario Land"],
    correctChoice: 'c'
  }, {
    text: "In the land of Hyrule what is the name of the villian who wants the Triforce?",
    choices: ["Medusa", "Gannon", "Link", "Bowser"],
    correctChoice: "b"
  }, {
    text: "In Metal Gear the agent Snake was sent to stop what weapon?",
    choices: ["The Black Pearl", "2nd Heaven", "Snake", "Metal gear"],
    correctChoice: "d"
  }, {
    text: "Nintendo replaced Mike Tyson in Punch-out with this fighter?",
    choices: ["Mr. Dream", "Soda Popinski", "Bald Bull", "Piston Honda"],
    correctChoice: "a"
  }, {
    text: "Little Mac and his trainer took on every fighter in Punch-out what was the name of his trainer?",
    choices: ["Trainer", "Doc", "Mario", "Yoshi"],
    correctChoice: "b"
  }, {
    text: "During the early days of castlevania this family was cursed, and needed to defeat Dracula to lift the curse?",
    choices: ["Simon", "Van Helsing", "Belmont", "El Pope"],
    correctChoice: "c"
  },
]
}

//global variables
var i = 0;
var j = 0;
var score = 0;
var qCount = 0

function runGame(){
  startGame();
  nextQuestion();
  displayTest();
}

function startGame(){
  $('.start').on('click', function(){
    $('.startScreen').css('display', 'none');
  });
}

function displayTest(){
  $('.question').text(Model.questions[i].text);
  $('.choices').each(function(j){
    $(this).text(Model.questions[i].choices[j]);
    j++
  })
};

function nextQuestion(){
  $('.nextquestion').on('click', function(){
    i++
    if(i <= Model.questions.length -1){
      displayTest();
      checkAnswer();
        $('input').prop("checked", false);
    } else {
      alert("The game has ended your score is " + score);
      i = 0;
      resetGame(startGame());
    }
  });

  function checkAnswer(){
   console.log("j:", j);
   console.log("i:", i);
   var checkSelection = $('input[name=choice]:checked').val();
     if(checkSelection == Model.questions[qCount].correctChoice) {
     // if($('input').prop('id')[j] === Model.questions[j].correctChoice) {
       score +=1;
       qCount += 1;
     } else {
       alert('wrong')
       qCount +=1;
     }
 };
  function resetGame(){
    $('.test').css('display', 'none');
    $('body').append('<button class="reset">Reset</button> ');
    $('.reset').on('click', function(){
      $('.startScreen').css('display', 'block');
      startGame();
    })
  }
}

runGame();
