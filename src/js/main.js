import '../css/styles.css';
import '../css/sketchyBootstrap.min.css';

// import { Character } from './character.js';
import { Board } from './board.js';
// import { Card } from './card.js';

//
//
//
// //function populate(takes array of URL strings to pictures of characters)
//
// //flip()
// //match()
// //reset()
// //takeTurn()
//
$(document).ready(function() {

  var b = new Board();
  b.getCharacters();

  $('#getPics').click(function() {
    // b.printCharacters();
    b.createDeck();
  });

  $('#getCards').click(function() {
    b.printDeck();


  });

});

//     //get characters
//     for (var numChar = 1; numChar < 4; numChar++) {
//
//       (async () => {
//         let character = new FetchChar();
//         const response = await character.fetchChar(numChar);
//         //push characters into board
//         //b.addChar(response, numChar);
//
//         // getElements(response);
//       })();
//     }
//
//     //populate(b.createBoard());
//
//     //attach event handlers to cells
//
//     //until numMatches === 0 take turns
//
//
//     function getElements(response) {
//
//       var element = "";
//       var selector = "";
//
//       // for (var i = 0; i < response.pictures.length; i++) {
//       //
//       //   element = `<li><img class="m-3" src=" ${response.pictures[i].large}"></li>`;
//       //
//       //   $("#display").append(element);
//       // }
//
//
//
//       for (var j = 0; j < 4; j++) {
//
//         element = `<img src=" ${response.pictures[j].large}" >`;
//
//         selector = `.pic${j}`;
//
//         $(selector).append(element);
//       }
//     }
//
//   });
// });
