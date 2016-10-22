var Model = {
 questions: [
  ["What was marios first game"],
  ["Name of the villian who wants the Triforce"],
  ["Who replaced Mike Tyson in Punch-Out!"],
  ["What is the contra secret 30 life code"],
  ["Family name of Castlevania cast"]
],
 answers: [["DonkeyKong", "Super Mario Brothers", "Mario Brothers", 'Duckhunt'],["Luigi", "Wario", "Gannon", "Bowser"], ["Mr. Dream", "SodaPopinski", "BaldBull", "Yoshi"], ["up up down dow right right left left", "up up down down left right left right", "left left right up down right right start", "up up left left right right down down"], ["Van helsing", "Crusader","Belmont", "Dirk"]
],
answerKey : {
  1: "DONKEYKONG",
  2: 'GANON',
  3: "MR. DREAM",
  4: "UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT",
  5: "BELMONT"
}
};

//global variables
var i = 0;
var score = 0;

//runs the whole game || should make controller
function runGame(){
  $(".start").on('click', function(){
    $(".startScreen").css("display", 'none');
    $('.question').append('<h2>' + Model.questions[i] + '</h2>');
    questions();
    displayChoices();
    updateScore();
  })
}

//sets questions from model on view
function questions(){
  $('.nextquestion').on('click', function(){
      if(i <= 3) {
        i++
        displayQuestions();
        displayChoices();
        updateScore();
      } else {
        endGame();
      }
  })
}

//adds new question to div and ands last question
function displayQuestions(){
  $('.question').empty();
  $('.question').append('<h2>' + Model.questions[i] + '</h2>');
  $('.choices').empty();
}


//iteratres over answers array and displays them in li
function displayChoices(){
  for(var j = 0; j < Model.answers.length -1; j++) {
  $(".choices").append('<li>' + Model.answers[i][j] + '</li><br>');
  }
}
//function to endGame
function endGame(){
  if(i == Model.questions.length -1){
    alert("game over your score is " + score + ". Refresh your screen to play again");
    i = 0;
  } else {
    questions();
  }
}

//function to updateScore
function updateScore(){
  var answer = $('.answerbox').val().toUpperCase();
  for(var k = 0; k < Model.answerKey.length -1; k++){
    $('.nextquestion').on('click', function(){
      if(answerKey[k] == answer){
        score+=1;
        console.log(score);
      } else {
        score = 0;
      }
    })
  }
}
runGame();
