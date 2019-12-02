import '../css/styles.css';
import '../css/sketchyBootstrap.min.css';

import { fetchChar } from './fetchChar.js';

$(document).ready(function() {

  $('#getPics').click(function() {

    (async () => {
      let character = new fetchChar();
      const response = await character.fetchChar(1);
      getElements(response);
    })();

    function getElements(response) {

      var element = "";

      // console.log(response.pictures.lenght)

      for (var i = 0; i < 4; i++) {
        element = `<img src=" ${response.pictures[i].large} ">"`;
        $('#display').append("<li class='m-3'>" + element + "</li>");
      }

    }

  });
});
