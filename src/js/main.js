


import '../css/sketchyBootstrap.min.css';
import '../css/styles.css';

import { Game } from './game.js';
// ***** USER INTERFACE LOGIC *****




// console.log("ONCLICK -- " + "player: " + t.whoseTurn + " clicked on: " + squareId + " game over: " + t.gameOver + " turnCounter: " + t.turnCounter + " square is marked: " + t.checkIfMarked(squareId) );

function getId(event) {
  // let div = document.getElementById('card');
  let target = event.target;

  console.log(target.tagName);

  while (target.tagName != "DIV") {
    target = target.parentNode;
  }
  markSquare(target);
}



function markSquare(element){
  // console.log(`here ${event.attributes.getNamedItem("class").value}`);
  // console.log(`here ${event}`);
  //
  // console.log(event);



  var squareId = element.attributes.getNamedItem("id").value;

  console.log("square IDDDD: " + squareId);
  var squareIdInterface = "#" + squareId;

  if(t.checkIfMarked(squareId) == false) {

    if(t.whoseTurn === 0) {
      $(squareIdInterface + " h1.markerO").remove();
      $(squareIdInterface + " h1.markerX").show();
      t.takeTurn(squareId);
    }

    else if(t.whoseTurn === 1) {
      $(squareIdInterface + " h1.markerX").remove();
      $(squareIdInterface + " h1.markerO").show();
      t.takeTurn(squareId);
    }

  }
  else
    console.log("square taken, choose another");

  if (t.checkGameOver()) {
    alert("game over");
  }
}



var t = new Game();
t.setGame();

$(document).ready(function() {

  $(".square").click(getId);//click

});//ready
