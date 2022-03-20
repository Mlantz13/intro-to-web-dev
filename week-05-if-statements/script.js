// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'Pong') {
    alert("That's Right, Good Job!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'Computer Space') {
    alert('Close, go a few years back.');
  } else {
    alert('Wrong! Hint:It was created in 1958 by William Higinbotham .')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'Minecraft') {
    alert("You're Killing it!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'Tetris') {
    alert('almost, think of a more modern blocky game.');
  } else if(answerTwo == 'GTAV') {
    alert("Not that one, but its up there");
  } else {
    alert("Incorrect, think of a blocky game")
  }
}

function submitAnswerThree() {

  const answerThreeInput = document.getElementById('answer-three-input');

  const answerThree = answerThreeInput.value;

  if(answerThree == 'Playstation 2' ) {
    alert("Great Job!");
    hide('question-three');
    show('question-four')
  } else if(answerThree == 'Nintendo DS') {
    alert("That's the second most sold console, try again!");
  } else if(answerThree == 'Xbox 360') {
    alert("Not quite, try it's competitor");
  } else if(answerThree == 'Playstation 3') {
    alert("Same family, try a different generation");
  } else {
    alert("Good guess, but not that one")
  }
}

function submitAnswerFour() {

  const answerFourInput = document.getElementById('answer-four-input');

  const answerFour = answerFourInput.value;

  if(answerFour == 'Pokemon') {
    alert("Almost There!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'Super Mario') {
    alert("Close but not quite, think little monsters battling each other")
  } else if(answerFour == 'Call of Duty') {
    alert("Not that one, think a bit more kid friendly")
  } else if(answerFour == 'The Elder Scrolls') {
    alert("No, but a good franchise still!")
  } else if(answerFour == 'Sonic') {
    alert("Woah, slow down there!")
  } else {
    alert("Incorrect, hint: it also has a popular tv show")
  }
}

function submitAnswerFive() {

  const answerFiveInput = document.getElementById('answer-five-input');

  const answerFive = answerFiveInput.value;

  if(answerFive == "Hell Yeah") {
    alert("That's What I'm talking about!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'yes') {
    alert("I think you mis-spelled Hell Yeah?")
  } else if(answerFive == 'maybe') {
    alert("What's that supposed to mean?")
  } else if(answerFive == 'no') {
    alert("I'm gonna need you to exit this page now")
  } else {
    alert("Dude, come on it's a yes or no question")
  }
}
// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
