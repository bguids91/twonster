$(document).ready(function () {

  var textarea = $('textarea')

  textarea.on('input', function() {
    let textarea = $(this)
    let charCount = textarea.val().length;
    let remainingChar = 140 - charCount;
    let counter = textarea.siblings('.counter');
    counter.text(remainingChar);
    if (counter.text() < 1) {
      counter.css('color', 'red')
    } else {
      counter.css('color', 'black')
    }
  });

});