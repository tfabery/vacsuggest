// Backend logic
var name;
var month;
var landscape;
var tv;
var weather;

var getMonth = function(date) {
  var mm = date.substr(5, 2);
  return parseInt(mm);
};

var destination = function() {
  if (weather === 'cold') {
    $('#antarctica').show();
    $('.form').hide();
  }
  else if (landscape === 'desert') {
    $('#egypt').show();
    $('.form').hide();
  }
  else if (tv === 'anime') {
    $('#japan').show();
    $('.form').hide();
  }
  else if ((tv === 'animals' && weather === 'warm' && ((month >= 3 && month <= 5) || (month >= 9 && month <= 11))) || (tv === 'animals' && weather === 'hot' && (month ===12 || month <= 2))) {
    $('#newzealand').show();
    $('.form').hide();
  }
  else {
    $('#bahamas').show();
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

    console.log(name);
    console.log(startDate);
    console.log(month);
    console.log(landscape);
    console.log(tv);
    console.log(weather);

    destination();
  });
});
