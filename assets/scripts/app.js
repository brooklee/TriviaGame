$(function() {
//-------------Global Var-----------

//lets store our trivia questions in an object
  var trivia = [
  // question 1
    {
        question: "What is CSS?",
        answers: ["Casscading Style Sheets", "Carrot steamed soup", "Corruoted style sheets", "Casscading stairs sheets"],
        correctAnswer: 0
    },
    // question 2
    {
        question: "Q2?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: 0
    },
    // question 3
    {
        question: "Q3?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: 0
    },
    // question 4
    {
        question: "Q4?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: 0
    }
];
  
    var timer = 10;
    var timerId;

   var selections = [];//Holds Selections
    var counter = 0;
    var score = $('#score');

//----------------Create trivia questions in Div---------------
//start Button  populate
  //Q1
  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
for (var i = 0; i < trivia.length; i++) {
  testDiv.innerHTML = '<h3>' + trivia[0].question + '</h3>'+ '<div> <form> <p> <input type="radio" name ="answer" value="1" checked>'
       + trivia[0].answers[0] +'</p>'
       + '<p><input type="radio" name ="answer" value="2">' + trivia[0].answers[1] +'</p>'
       + '<p><input type="radio" name ="answer" value="3">' +trivia[0].answers[2] +'</p>'
       + '<p><input type="radio" name ="answer" value="4">' +trivia[0].answers[3] +'</p>'
       + '<p></form> </div>';
  var questionsDiv = document.getElementById('questions');
  questionsDiv.appendChild(testDiv);
  }
});

  //Q1
  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
for (var i = 0; i < trivia.length; i++) {
  testDiv.innerHTML = '<h3>' + trivia[1].question + '</h3>'+ '<div> <form> <p> <input type="radio" name ="answer" value="1" checked>'
       + trivia[1].answers[0] +'</p>'
       + '<p><input type="radio" name ="answer" value="2">' + trivia[1].answers[1] +'</p>'
       + '<p><input type="radio" name ="answer" value="3">' +trivia[1].answers[2] +'</p>'
       + '<p><input type="radio" name ="answer" value="4">' +trivia[1].answers[3] +'</p>'
       + '<p></form> </div>';
  var questionsDiv = document.getElementById('questions');
  questionsDiv.appendChild(testDiv);
  }
});

  //Q1
  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
for (var i = 0; i < trivia.length; i++) {
  testDiv.innerHTML = '<h3>' + trivia[2].question + '</h3>'+ '<div> <form> <p> <input type="radio" name ="answer" value="1" checked>'
       + trivia[2].answers[0] +'</p>'
       + '<p><input type="radio" name ="answer" value="2">' + trivia[2].answers[1] +'</p>'
       + '<p><input type="radio" name ="answer" value="3">' +trivia[2].answers[2] +'</p>'
       + '<p><input type="radio" name ="answer" value="4">' +trivia[2].answers[3] +'</p>'
       + '<p></form> </div>';
  var questionsDiv = document.getElementById('questions');
  questionsDiv.appendChild(testDiv);
  }
});

  //Q1
  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
for (var i = 0; i < trivia.length; i++) {
  testDiv.innerHTML = '<h3>' + trivia[3].question + '</h3>'+ '<div> <form> <p> <input type="radio" name ="answer" value="1" checked>'
       + trivia[3].answers[0] +'</p>'
       + '<p><input type="radio" name ="answer" value="2">' + trivia[3].answers[1] +'</p>'
       + '<p><input type="radio" name ="answer" value="3">' +trivia[3].answers[2] +'</p>'
       + '<p><input type="radio" name ="answer" value="4">' +trivia[3].answers[3] +'</p>'
       + '<p></form> </div>';
  var questionsDiv = document.getElementById('questions');
  questionsDiv.appendChild(testDiv);
  }
});

 
  

//add radio buttons
  //Come back and loop the populate

  


  //------------------Start Game-------------------
  //Hide Start Button
  $(document).ready(function(){
    $("#startButton").click(function(){
        $("#startButton").hide();
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
        alert("times up")
        $('#questions').fadeOut()
      }
    }

    function stop() {

      clearInterval(timerId);
    };



    

  //-----------------Check awnsers------------------------
  //Pushusers ansers to an array
  function choose() {
   selections[counter] = $("input[type='radio'][name='answer']:checked").val();
  }
  choose();

  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === trivia[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 trivia.length + ' right!!!');
    return score;
  }
  displayScore();

  var scoreElem = displayScore();
        score.append(scoreElem).fadeIn();


  });

