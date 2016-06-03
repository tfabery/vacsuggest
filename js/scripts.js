// Backend logic
var name;
var month;

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
    console.log(name);
    console.log(startDate);
    console.log(month);
  });
});
