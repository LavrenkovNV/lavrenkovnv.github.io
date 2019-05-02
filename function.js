function showAnswerOne(){
  document.getElementById('speech-bubble1').innerHTML = "Hello Human!";
  document.getElementById('speech-bubble1:after'); // adds triangle to speech bubble
  var bubbleOne = document.getElementById("speech-bubble1");
  if (bubbleOne.style.display === "none") {
    bubbleOne.style.display = "block";
  } else {
    bubbleOne.style.display = "none";
  }
};

//function for PRINTING TEXT OUTPUT TO DIV
function showAnswerTwo(){
  document.getElementById('speech-bubble2').innerHTML = "Meow LOL... Go to example 2!";
  document.getElementById('speech-bubble2:after'); // adds triangle to speech bubble
  var bubbleTwo = document.getElementById("speech-bubble2");
  if (bubbleTwo.style.display === "none") {
    bubbleTwo.style.display = "block";
  } else {
    bubbleTwo.style.display = "none";
  }
};

//defining functions for PLAYING AND PAUSING A VIDEO on voice command via DOM
var video = document.getElementById("vid");

//function for PLAYING A VIDEO
function Play() {
  video.play();
}

//function for PAUSING A VIDEO
function Pause() {
  video.pause();
}

//defining functions for CHANGING TEXT ATTRIBUTES on voice command via DOM
//function for ENLARGING TEXT
function makeTextBigger(){
  document.getElementById('catstory').style.fontSize = "30px";
}

//function for MAKING TEXT UPPERCASE
function makeTextUppercase(){
  document.getElementById('catstory').style.textTransform ="uppercase"
}

//function for SCROLLING TEXT
function pageScroll(){
  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,10);
}

//function for OPENING NEW WINDOW
function openWin() {
  myWindow = window.open("https://en.wikipedia.org/wiki/List_of_cats", "myWindow", "width=1000, height=800");   // Opens a new window
}

//function for MAKING A DIV WITH EMBEDDED GAME APPEAR ON THE SCREEN
function openGame() {
  var nyanCat = document.getElementById("gameBox");
  if (nyanCat.style.display === "none") {
    nyanCat.style.display = "block";
  } else {
    nyanCat.style.display = "none";
  }
}

if (annyang) {
  var commands = {
    'hello cat': function() {
      showAnswerOne();
      console.log("This works"); //Just for checking
    },

    'meow': function() {
      showAnswerTwo();
      console.log("This works"); //Just for checking
    },
  }

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start({
    autoRestart: true
  });

// Tell KITT to use annyang
  SpeechKITT.annyang();

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');

  // Render KITT's interface
  SpeechKITT.vroom();


}