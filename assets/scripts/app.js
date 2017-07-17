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

    var correct = 0;
    var wrong = 0;

//----------------Create trivia questions in Div---------------
//start Button  populate
  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = '<h3>' + trivia[0].question + '</h3>'+ '<div> <form> <p> <input type="radio">'
     + trivia[0].answers[0] +'</p>'
     + '<p><input type="radio">' + trivia[0].answers[1] +'</p>'
     + '<p><input type="radio">' +trivia[0].answers[2] +'</p>'
     + '<p><input type="radio">' +trivia[0].answers[3] +'</p>'
     + '<p></form> </div>';
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);

});

  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[1].question + '<div> <form> <input type="radio">'
     + trivia[1].answers[0]
     + '<input type="radio">' + trivia[1].answers[1]
     + '<input type="radio">' +trivia[1].answers[2]
     + '<input type="radio">' +trivia[1].answers[3]
     + '</form> </div>';
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);
}); 

  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[2].question + '<div> <form> <input type="radio">'
     + trivia[2].answers[0]
     + '<input type="radio">' + trivia[2].answers[1]
     + '<input type="radio">' +trivia[2].answers[2]
     + '<input type="radio">' +trivia[2].answers[3]
     + '</form> </div>';
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);
});

  $("#startButton").on('click', function populate() {
var testDiv = document.createElement("div");
testDiv.innerHTML = trivia[3].question + '<div> <form> <input type="radio">'
     + trivia[3].answers[0]
     + '<input type="radio">' + trivia[3].answers[1]
     + '<input type="radio">' +trivia[3].answers[2]
     + '<input type="radio">' +trivia[3].answers[3]
     + '</form> </div>';
var questionsDiv = document.getElementById('questions');
questionsDiv.appendChild(testDiv);
});

//add radio buttons
function createRadios(index) {
    var radioList = $('<div>');
    var item;
    var input = '';
    for (var i = 0; i < trivia[index].answers.length; i++) {
      item = $('<div>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += trivia[index].answers[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
/*$(function() {
    $( "#radio" ).push('<input type="radio" />');
  });*/

//createDiv

//createInput

//inputType=radioBtn

  


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
    };

  });

    

  //-----------------Check awnsers------------------------

  //if (correctAnswer === true)

