$(document).ready(function() {

  var padOne = new Audio('./sounds/bird.mov');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('./sounds/butter.mov');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('./sounds/revel.mov');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('./sounds/sure.mov');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('./sounds/taffy.mov');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

});
