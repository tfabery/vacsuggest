// Backend logic
var name;
var month;

// Frontend logic
$(function() {
  $('form#vac-form').submit(function(event){
    name = $('#name').val();
    month = $('#month').val();
    console log(name);
    console log(month);
    event.preventDefault();
  });
});
