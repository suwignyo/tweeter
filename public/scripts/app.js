/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


/*
 * Creates a tweet element by taking data from database
 */
function createTweetElement(data){
  let tweet =
      `<article class="container" id="tweets-container">
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

/* This function takes an array of tweet objects and adds it to tweet container
 */
function renderTweets(tweets) {
  tweets.forEach(function (tweet) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  });
}

/* This function loads the tweets from database and ready to be rendered
 */
function loadTweets(){
    $.ajax({
    url: '/tweets',
    type: 'GET',
  }).then(function (obj){
      $('#tweets-container').empty();
      renderTweets(obj);
    })
  }

/* Prevents user from inputting scripts and disrupting the page
 */
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* Checks the tweet box, if input doesn't meet requirement,
 * appropriate error message will pop out. On normal tweet,
 * it will post the tweet and refresh the page with the new tweet
 */
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

/* Toggles the compose button to show/hide when clicked
 */
$( document ).ready(function(){
  $( "#composeButton" ).click(function() {
    $( "section.new-tweet").slideToggle("slow", function() {
      $('#tweetBox').focus();
    });
  });
});
