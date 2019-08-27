
//array of questions
let questions = [
'How long does it take sunlight to reach Earth?',
"Witch of these movies, influenced George Lucas on making 'Star Wars'?",
"How long did the War of 1812 lasted?",
"How many NBA championships did Michael Jordan win with the Chicago Fools?",
"What is Paul McCartney's middle name?"
];


//arrays of answers
let firstQuestionAnswers = ["1 second","6 months and 6 days","8 minutes and 20 seconds","10 million years","8 minutes and 20 seconds"];
let secondQuestionAnswers = ["Akira Kurosawa's 'The Hidden Fortress'","'The Great Escape' by John Sturge","'Metropolis' by Fritz Lang","'Solaris' by Andrei Tarkofski","Akira Kurosawa's 'The Hidden Fortress'"];
let thirdQuestionAnswers = ["6 months","3 years","3 months","9 months","3 years"];
let fourthQuestionAnswers = ["3","6","4","0","0"];
let fifthQuestionAnswers = ["John","George","Mac","Paul","Paul"];

let arrayOfArrays = [];
arrayOfArrays.push(firstQuestionAnswers);
arrayOfArrays.push(secondQuestionAnswers);
arrayOfArrays.push(thirdQuestionAnswers);
arrayOfArrays.push(fourthQuestionAnswers);
arrayOfArrays.push(fifthQuestionAnswers);


//dom variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');

let answerButton = document.getElementById("answerbutton");

let question = document.getElementById('question-value');

//helper array for loops
let arrayOfAnswerValues = [];

let firstAnswerValue = document.getElementById('first-answer-value');
arrayOfAnswerValues.push(firstAnswerValue);
let secondAnswerValue = document.getElementById("second-answer-value");
arrayOfAnswerValues.push(secondAnswerValue);
let thirdAnswerValue = document.getElementById('third-answer-value');
arrayOfAnswerValues.push(thirdAnswerValue);
let fourthAnswerValue = document.getElementById('fourth-answer-value');
arrayOfAnswerValues.push(fourthAnswerValue);
let fifthAnswerValue = document.getElementById('fifth-answer-value');
arrayOfAnswerValues.push(fifthAnswerValue);

let htmlBody = document.getElementById("html-body");

let gameOverPhoto = document.getElementById("game-over-photo");
let wonPhoto = document.getElementById("won-photo");



gameOverPhoto.style.display = "none";
wonPhoto.style.display = "none";

//game variables
playerScore = 0,
rightAnswer = "",
phase = 0;

const maxScore = 5;

//css access
firstAnswerValue.style.display = "none";
secondAnswerValue.style.display = "none";
thirdAnswerValue.style.display = "none";
fourthAnswerValue.style.display = "none";
fifthAnswerValue.style.display = "none";


//new game button event
newGameButton.addEventListener('click',function(){
    
    firstQuestionDetails();
    phase++;
});

//answer button event
answerButton.addEventListener('click',function(answer){

 phase++;

getScore(answer);

console.log(answer.target.innerText);
  switch(phase){
    case 2:
     return secondQuestionDetails();
    case 3:
     return thirdQuestionsDetails();
    case 4:
     return fourthQuestionsDetails();
     case 5:
       return fifthQuestionsDetails();
     case 6:
        return gameOverStatus();
    default:
      break;
  }

});

//get score function
function getScore(answer){
    if(answer.target.innerText == rightAnswer){
      playerScore++;
    }
    
       
};

//gameOverStatus function
function gameOverStatus(){

  if(gameStarted){
    if(playerScore === maxScore){
      textArea.innerText = "YOU WON! YOU CAN TAKE ALL THE BANANAS!";
      htmlBody.style.backgroundColor = "#5ea554";
      wonPhoto.style.display = "initial";

    }
    else{
      textArea.innerText = `You answered correctly ${playerScore} out of ${maxScore} questions.You can try again!`;
      htmlBody.style.backgroundColor = "#97564a";
      gameOverPhoto.style.display = "initial";
  

    };
  }
  question.style.display = "none";
  firstAnswerValue.style.display = "none";
  secondAnswerValue.style.display = "none";
  thirdAnswerValue.style.display = "none";
  fourthAnswerValue.style.display = "none";
  fifthAnswerValue.style.display = "none";
  newGameButton.style.display = "initial";
  phase = 0;
  playerScore = 0;
  gameStarted = false;
};

// Questions details

function firstQuestionDetails(){
  gameStarted = true;
  gameOverPhoto.style.display = "none";
  wonPhoto.style.display = "none";
  setTextAreaInnerText("1");
  htmlBody.style.backgroundColor = "#4fb1b4f6";
  newGameButton.style.display = "none";
  question.style.display = 'initial';
   question.innerText = questions[0];

firstAnswerValue.style.display = "initial";
secondAnswerValue.style.display = "initial";
thirdAnswerValue.style.display = "initial";
fourthAnswerValue.style.display = "initial";
j = 0;
for(i = 0; i < arrayOfAnswerValues.length; i++){
  arrayOfAnswerValues[i].innerText = arrayOfArrays[j][i];
}
rightAnswer = arrayOfArrays[j][4];
j++;

};

function secondQuestionDetails(){

  setTextAreaInnerText("2");
  question.innerText = questions[1];

  // htmlBody.style.backgroundColor = "#768f8b";

  for(i = 0; i < arrayOfAnswerValues.length; i++){
    arrayOfAnswerValues[i].innerText = secondQuestionAnswers[i];
  }
    rightAnswer = secondQuestionAnswers[4];
}

function questionDetails(){
  setTextAreaInnerText(`${phase}`);
  question.innerText = questions[phase - 1];
  j = 0;
  for(i = 0; i < arrayOfAnswerValues.length; i++){
    arrayOfAnswerValues[i].innerText = arrayOfArrays[j][i];
  }
  rightAnswer = arrayOfArrays[j][4];
  j++;
}

function thirdQuestionsDetails(){
  setTextAreaInnerText("3");
  question.innerText = questions[2];

  // htmlBody.style.backgroundColor = "#9a9e80";
  for(i = 0; i < arrayOfAnswerValues.length; i++){
    arrayOfAnswerValues[i].innerText = thirdQuestionAnswers[i];
  }
  rightAnswer = thirdQuestionAnswers[4];  
    
}

function fourthQuestionsDetails(){
  setTextAreaInnerText("4");
  question.innerText = questions[3];

  for(i = 0; i < arrayOfAnswerValues.length; i++){
    arrayOfAnswerValues[i].innerText = fourthQuestionAnswers[i];
  }
  rightAnswer = fourthQuestionAnswers[4];  
    
}

function fifthQuestionsDetails(){
  setTextAreaInnerText("5");
  question.innerText = questions[4];

  for(i = 0; i < arrayOfAnswerValues.length; i++){
    arrayOfAnswerValues[i].innerText = fifthQuestionAnswers[i];
  }
  rightAnswer = fifthQuestionAnswers[4];  
    
}
//function fot the textArea innerText
function setTextAreaInnerText(numberOfQuestion){
  if(gameStarted){
    textArea.innerText = `Question ${numberOfQuestion}`;
  };
}
