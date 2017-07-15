$(function() {
//-------------Global Var-----------

//lets store our trivia questions in an object
  var trivia = [
  // question 1
    {
        "question": "Q1?",
        "answers": ["1", "2", "3", "4"],
        "correctAnswer": 0
    },
    // question 2
    {
        "question": "Q2?",
        "answers": ["1", "2", "3", "4"],
        "correctAnswer": 0
    },
    // question 3
    {
        "question": "Q3?",
        "answers": ["1", "2", "3", "4"],
        "correctAnswer": 0
    },
    // question 4
    {
        "question": "Q4?",
        "answers": ["1", "2", "3", "4"],
        "correctAnswer": 0
    }
];
  
    var timer = 10;
    var timerId;

    var correct = 0;
    var wrong = 0;

//----------------Create trivia questions in Div---------------
//start Button  populate
  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[0].question + '<input type="radio" />' + trivia[0].answers;
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);
});

  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[1].question + trivia[1].answers;
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);
}); 

  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[2].question + trivia[2].answers;
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);
});

  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[3].question + trivia[3].answers;
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);

//add radio buttons

$(function() {
    $( "#radio" ).push('<input type="radio" />');
  });

});



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
      }
    }

    function stop() {

      clearInterval(timerId);
    }

    });

  //-----------------Check awnsers------------------------

  //if (correctAnswer === true)

