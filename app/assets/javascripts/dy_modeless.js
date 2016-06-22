// Custom namespace
var modal = {};
modal.hide = function() {
  $('#overlay').fadeOut();
  $('.dialog').fadeOut();
};

$(document).ready(function() {
  // Open appropriate dialog when clicking on anything with class "dialog-open"
  $('.dialog-open').click(function() {
    $('#overlay').fadeIn();
    $('.dialog').fadeIn();
  });
  // Require the user to click OK if the dialog is classed as "modal"
  // 
  $('#overlay').click(function() {
   $('.dialog').hide();
   $('#overlay').hide();
  });
  
  // Prevent dialog closure when clicking the body of the dialog (overrides closing on clicking overlay)
  $('.dialog').click(function() {
    event.stopPropagation();
  });
});