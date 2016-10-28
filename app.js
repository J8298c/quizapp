//make better use of data objects for questions and answers
//fix questions
var Model = {
questions : [
  {
    text: "In which game did Super Mario make his first apperance?",
    choices: ["Mario Brothers", "Super Mario Brothers", "Donkey Kong", "Super Mario Land"],
    correctChoice: 'c',
    gameImage: "images/mario.png"
  }, {
    text: "In the land of Hyrule what is the name of the villian who wants the Triforce?",
    choices: ["Medusa", "Gannon", "Link", "Bowser"],
    correctChoice: "b",
    gameImage: "images/zelda.jpg"
  }, {
    text: "In Metal Gear the agent Snake was sent to stop what weapon?",
    choices: ["The Black Pearl", "2nd Heaven", "Snake", "Metal gear"],
    correctChoice: "d",
    gameImage: "images/metalgear.jpg"
  }, {
    text: "Nintendo replaced Mike Tyson in Punch-out with this fighter?",
    choices: ["Mr. Dream", "Soda Popinski", "Bald Bull", "Piston Honda"],
    correctChoice: "a",
    gameImage: 'images/punchout.png'
  }, {
    text: "Little Mac and his trainer took on every fighter in Punch-out what was the name of his trainer?",
    choices: ["Trainer", "Doc", "Mario", "Yoshi"],
    correctChoice: "b",
    gameImage: 'images/littlemac.png'
  }, {
    text: "During the early days of castlevania this family was cursed, and needed to defeat Dracula to lift the curse?",
    choices: ["Simon", "Van Helsing", "Belmont", "El Pope"],
    correctChoice: "c",
    gameImage: 'images/castlevania.png'
  }, {
    text: "What was the code to gain 30 lives in Contra?",
    choices: ["Up Up Down Down Left Up Down", 'Up Up Down Down Left Right Left Right', "Down Down Up Left Right", "Up Up Left Right Left Right"],
    correctChoice: "b",
    gameImage: 'images/contra.jpg'
  }, {
    text: "Super Mario Brothers 3 was accompanied by a special accessory what was that accessory?",
    choices: ["Nintendo Cube", "Mario's Raccon Tail", "Fred Savage", "Power Glove"],
    correctChoice: 'd',
    gameImage: 'images/mario3.png'
  }, {
    text: "In the game Bad Dudes the two brothers had a saying do you know what it was?",
    choices: ["I want to rock and roll", 'Cowabunga', 'Whos Bad', 'We got this'],
    correctChoice: 'c',
    gameImage: 'images/baddudes.jpg'
  }, {
    text: "In kung-fu what sound effect would occur if the player died?",
    choices: ["Signing everyone was kung-fu fighting", 'Sinster laugh', 'Sound of martial artist', 'Micheal Jacksons beat it'],
    correctChoice: 'b',
    gameImage: 'images/kungfu.png'
  }
]
};

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
  $('.gamepics').attr('src', Model.questions[i].gameImage);
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
      gameOver();
    }
  });
}

function gameOver(){
  $('.test').css('display', 'none');
  $('.gamepics').remove();
  $('.game-over ').css("display", "block");
  $('.player-score').text("Your Score is " + score + "!!!!");
}
  function checkAnswer(){
   var checkSelection = $('input[name=choice]:checked').val();
     if(checkSelection == Model.questions[qCount].correctChoice) {
       score +=1;
       qCount += 1;
     } else {
       qCount +=1;
     }
 }

runGame();
