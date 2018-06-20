$( document ).ready(function() {
    console.log( "ready!" );
});

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
