$(document).ready(function () {
  console.log("I'm Ready to Go!")

var textarea = $('textarea')

textarea.on('keypress', function() {
  let originalCount = 139
  let charCount = $(this).val().length
  console.log(originalCount - charCount)
})


});