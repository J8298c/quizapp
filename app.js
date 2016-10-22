var Model = {
 questions: [
  ["What was marios first game"],
  ["Name of the villian who wants the Triforce"],
  ["Who replaced Mike Tyson in Punch-Out!"],
  ["What is the contra secret 30 life code"],
  ["Family name of Castlevania cast"]
],
 answers: [["DonkeyKong", "Super Mario Brothers", "Mario Brothers", 'Duckhunt'],["Luigi", "Wario", "Gannon", "Bowser"], ["Mr. Dream", "SodaPopinski", "BaldBull", "Yoshi"], ["up up down dow right right left left", "up up down down left right left right", "left left right up down right right start", "up up left left right right down down"], ["Van helsing", "Crusader","Belmont", "Dirk"] ]
};
var i = 0;
var j = 0;
var score = 0;

function runGame(){
  $(".start").on('click', function(){
    $(".startScreen").css("display", 'none');
    $('.question').append('<h2>' + Model.questions[i] + '</h2>');
    questions();
    displayChoices();
  })
}

runGame();
function questions(){
  $('.nextquestion').on('click', function(){
      if(i <= 3) {
        i++
        displayQuestions();
        displayChoices();
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
  $(".choices").append('<input class="choicebox" type="checkbox"><li>' + Model.answers[i][j] + '</li>');
  }
}

function endGame(){
  if(i == Model.questions.length -1){
    alert("game over your score is " + score);
    i = 0;
  } else {
    questions();
  }
}
