$(document).ready(function() {

  var padOne = new Audio('./sounds/bird.mp3');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('./sounds/butter.mp3');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('./sounds/revel.mp3');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('./sounds/sure.mp3');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('./sounds/taffy.mp3');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

});
