/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

function createTweetElement(data){
  let $tweet = $('<article>').addClass('tweet-feed');
  let $tweetHeader = $("<header>").appendTo($tweet);
  let $tweetFooter = $("<footer>").appendTo($tweet);

  $('<div>').addClass('profPic')
  .appendTo($tweetHeader);

  $('<img>').attr('src', tweetData.user.avatars.small)
  .appendTo($tweetHeader);

  $('<p>').addClass('name').text(tweetData.user.name)
  .appendTo($tweetHeader);

  $('<p>').addClass('username').text(tweetData.user.handle)
  .appendTo($tweetHeader);

  $('<div>').addClass('tweet')
  .appendTo($tweet);

  $('<p>').addClass('content').text(tweetData.user.content)
  .appendTo($tweet);

  $('<hr>').appendTo($tweet);

  $('<div>').addClass('footer').text(tweetData.user.created_at)
  .appendTo($tweetFooter);

  $('<span>').addClass('buttons')
  .appendTo($tweetFooter);

  $('<i>').addClass('fas fa-flag')
  .appendTo($tweetFooter);

  $('<i>').addClass('fas fa-retweet')
  .appendTo($tweetFooter);

  $('<i>').addClass('fas fa-heart')
  .appendTo($tweetFooter);

}

function renderTweets(tweets) {
  tweetsData.forEach(function (tweet) {
    $('#tweets-container').append(createTweetElement(tweetData));
  });
}

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

