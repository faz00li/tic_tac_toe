import '../css/styles.css';
import '../css/sketchyBootstrap.min.css';

import { Board } from './board.js';
// import { Card } from './card.js';
// import { Character } from './character.js';

function populate(board) {
  var i = 0, selector = "", html = "";
  board.deck.forEach(function(card){
    selector = `#${i}`;
    // console.log(selector);
    html = `<div class="front cardId${card.getId()}"><img  src="${card.getPic()}"></div>`;
    $(selector).prepend(html);
    i++;
  });
}

function flip(selectorFront, selectorBack) {
  $(selectorFront).show();
  $(selectorBack).hide();
}

function updateClicks(board) {
  board.addClick();
}

function endTurn(board) {
  if (board.getClicks() == board.getTurns()) {
    board.resetClicks();
    $(".front").hide();
    $(".back").show();
  }

}


var b = new Board();

b.getCharacters();



$('#getPics').click(function() {
  b.createDeck();

});

$('#getCards').click(function() {
  populate(b);
});

$(document).ready(function() {

  $('.col-sm').click(function(event){
    var card = event.target.id;
    var selectorFront = `#${card} > .front`;
    var selectorBack = `#${card} > .back`;

    flip(selectorFront, selectorBack);
    updateClicks(b);
    endTurn(b);




    //
    // console.log("origninal numClicks: " + numberOfClicks);
    // console.log("cardId: " + card);
    // console.log("click --> front selector: " + selectorFront);
    // console.log("click --> back selector: " + selectorBack);




  });




  // $('.front').click(function(event) {
  // //   var card =
  // });

});


//     //populate(b.createBoard());
//
//     //attach event handlers to cells
//
//     //until numMatches === 0 take turns
//
