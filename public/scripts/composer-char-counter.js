/*
 *Tracks the character and turns it into red when it
 *reaches a negative value
 */
$( document ).ready(function() {
  $("textarea").keyup(function(){
    var maxLength = 140;
    var length = $(this).val().length;
    console.log(length);
    var text = maxLength-length;
    $('.counter').text(text);
    $('.counter').toggleClass('red', text < 0);
  });
})
