/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(data){
  var tweet=  `<article class="container" id="tweets-container">
        <section class="tweet-feed">

          <header class="header">
            <div class="profPic">
              <img src=${data.user.avatars.small}>
              <div class="userinfo">
                <span class="name">${data.user.name}</span>
                <span class="username">${data.user.handle}</span>
              </div>
            </div>
          </header>

          <div class="tweet">
            <p class="content">${escape(data.content.text)}</p>
          </div>
          <hr>
          <footer>
            <div class="footer">${(moment(data.created_at).fromNow())}
              <span class="buttons">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </span>
            </div>
          </footer>
        </section>
      </article>`;
  return $(tweet);
}

function renderTweets(tweets) {
  tweets.forEach(function (tweet) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  });
}

function loadTweets(){
    $.ajax({
    url: '/tweets',
    type: 'GET',
  }).then(function (obj){
      $('#tweets-container').empty();
      renderTweets(obj);
})
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

$( document ).ready(function() {
  let lengthMax = 140;
  $('#tweetButton').on('submit', function (event) {
      let text = $("textarea").val();
      event.preventDefault();
      if (text === '') {
        $('.noInputChar').fadeIn(300).delay(500).fadeOut();
        return;
      } else if (text.length > lengthMax) {
        $('.tooManyChar').fadeIn(300).delay(500).fadeOut();
        return;
      } else {
           $.ajax({
            url: '/tweets',
            type: 'POST',
            data: $(this).serialize(),
          }).then(function (obj){
              $('.noInputChar').hide();
              $('.tooManyChar').hide();
              $("textarea").val('');
              $('#counter').html('140');
              loadTweets();
        })
      }
    })
  loadTweets();
});

$( document ).ready(function(){
  $( "#composeButton" ).click(function() {
    $( "section.new-tweet").slideToggle("slow", function() {
      $('#tweetBox').focus();
    });
  });
});
