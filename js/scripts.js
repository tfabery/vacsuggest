// Backend logic
var name;
var month;
var landscape;
var tv;
var weather;
var destination;
var noChoice = 'you did not answer any multiple choice questions. So'

var getMonth = function(date) {
  var mm = date.substr(5, 2);
  return parseInt(mm);
};

var destination = function() {
  if (weather === 'cold') {
    destination = 'Antarctica';
    $('#antarctica').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else if (tv === 'anime') {
    destination = 'Japan';
    $('#japan').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else if ((tv === 'animals' && weather === 'warm' && ((month >= 3 && month <= 5) || (month >= 9 && month <= 11))) || (tv === 'animals' && weather === 'hot' && (month === 12 || month <= 2)) || landscape === 'mountain') {
    destination = 'NewZealand';
    $('#newzealand').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else if (landscape === 'desert' || weather === 'hot') {
    destination = 'Egypt';
    $('#egypt').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else if (landscape === tv && tv === weather) {
    destination = 'Antarctica';
    $('#antarctica').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
    $('.no-choice').text(noChoice);
  }
  else {
    destination = 'Bahamas';
    $('#bahamas').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
};

var back = function() {
  $('#' + destination.toLowerCase()).hide();
  $('#hidden-jumbotron').hide();
  $('.form').slideToggle();
};

// Frontend logic
$(function() {
  $('form#vac-form').submit(function(event){
    event.preventDefault();
    var startDate = $('#startDate').val();
    name = $('#name').val();
    month = getMonth(startDate);
    landscape = $('input:radio[name=landscape]:checked').val();
    tv = $('input:radio[name=tv]:checked').val();
    weather = $('input:radio[name=weather]:checked').val();

    //================Debug=====================
    // console.log(name);
    // console.log(startDate);
    // console.log(month);
    // console.log(landscape);
    // console.log(tv);
    // console.log(weather);
    //================End debug=================

    destination();

    //================Debug=====================
    // console.log(destination);
    //================End debug=================

    $('.name').text(name);
    $('.destination').text(destination);
  });
  $('.jumbotron button').click(function() {
    back();
  });
});
