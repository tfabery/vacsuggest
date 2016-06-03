// Backend logic
var name;
var month;
var landscape;
var tv;
var weather;
var destination;

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
  else if (landscape === 'desert') {
    destination = 'Egypt';
    $('#egypt').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else if (tv === 'anime') {
    destination = 'Japan';
    $('#japan').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else if ((tv === 'animals' && weather === 'warm' && ((month >= 3 && month <= 5) || (month >= 9 && month <= 11))) || (tv === 'animals' && weather === 'hot' && (month ===12 || month <= 2))) {
    destination = 'New Zealand';
    $('#newzealand').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
  else {
    destination = 'Bahamas';
    $('#bahamas').slideDown();
    $('.jumbotron').fadeIn();
    $('.form').hide();
  }
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
});
