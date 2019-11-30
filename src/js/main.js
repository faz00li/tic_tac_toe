import { helloWorld } from './index.js';
import '../css/styles.css';
import '../css/sketchyBootstrap.min.css';




$(document).ready(function() {
  $('#greeting').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#display').append("<li>" + helloWorld(name) + "</li>");
  });
});
