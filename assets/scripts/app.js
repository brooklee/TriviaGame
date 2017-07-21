$(function() {
//-------------Global Var-----------

//lets store our trivia questions in an object
var timer = 10;
    var timerId;

   var selections = [];//Holds Selections
    var score = $('#score');
    var counter = 0;

  var trivia = [{
    question: "01. What is CSS?",
    answers: ["Casscading Style Sheets", "Carrot steamed soup", "Corruoted style sheets", "Casscading stairs sheets"],
    correctAnswer: 0
  },{
    question: "02. Q2?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 1
  },{
    question: "03. Q3?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 3
  },{
    question: "04. Q4?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 3
  }];
  
    

//----------------Create trivia questions in Div---------------
//start Button  populate

  $("#startButton").on('click', function populate() {
    var testDiv = document.createElement("div");
    for (var i = 0; i < trivia.length; i++) {
      testDiv.innerHTML += '<h3>' + trivia[i].question + '</h3>' + '<div><form><p><input type="radio" name="answer" value="right">' +
      trivia[i].answers[0] + '</p>' +
        '<p><input type="radio" name ="answer" value="2">' + trivia[i].answers[1] + '</p>' +
        '<p><input type="radio" name ="answer" value="3">' + trivia[i].answers[2] + '</p>' +
        '<p><input type="radio" name ="answer" value="4">' + trivia[i].answers[3] + '</p>' +
        '<p></form> </div>';
    }
    var questionsDiv = document.getElementById('questions');
    questionsDiv.appendChild(testDiv);
  });


  //------------------Start Game-------------------
  //Hide Start Button
  $(document).ready(function(){
    $("#startButton").click(function(){
        $("#startButton").fadeOut();
    });
});

      
  //------------------Start Timer-------------------
  $("#startButton").on("click", run);

  function run() {
      timerId = setInterval(decrement, 1000);
    }

    function decrement() {
      timer--;
      $("#show-number").html("<h3>" + timer + "</h3>");

      if (timer === 0) {
        stop();
        alert("times up");
        $('#questions').fadeOut();

      }
    }

    function stop() {

      clearInterval(timerId);
    };



    

  //-----------------Check answers------------------------
  //Pushusers ansers to an array
  function choose() {
   selections[counter] = $("input[type='radio'][name='answer']:checked").val() === "right";
  }
  choose();


  function displayScore() {
    var score = $('<p>',{id: 'score'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === trivia[0].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 trivia.length + ' right!!!');

    return score;
  }
  displayScore();

  var scoreElement = displayScore();
        score.append(scoreElement).fadeIn();

// function answerCounter() {
//   if ($('input[name="answer"]:checked').val() === "correct"){
//     $("#score").html("<h3>" +"Correct Answers" correctCounter + "</h3>");
//     correctCounter++;
//     }
//  else{
//   $("#score").html("<h3>" +"incorrect Answers" incorrectCounter + "</h3>");
//     incorrectCounter++;
//   }
  
// }


//-----------------Finish Button------------------------
// when finish button is click skip timer to 0
});


