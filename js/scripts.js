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
  });
});
