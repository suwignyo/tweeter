/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
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
  },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
];



function createTweetElement(data){
  console.log(data);
  var tweet=  `<article class="container" id="tweets-container">
        <section class="tweet-feed">

          <header class="header">
            <div class="profPic">
              <img src=${data.user.avatars.small}>
              <p class="name">${data.user.name}</p>
              <p class="username">${data.user.handle}</p>
            </div>
          </header>

          <div class="tweet">
            <p class="content">${data.content.text}</p>
          </div>
          <hr>
          <footer>
            <div class="footer">${data.created_at}
              <span class="buttons">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </span>
            </div>
          </footer>
        </section>
      </article>`;
  // console.log(tweet);
  return $(tweet);
}


//   let $tweet = $('<article>').addClass('tweet-feed');
//   let $tweetHeader = $("<header>").appendTo($tweet);
//   let $tweetFooter = $("<footer>").appendTo($tweet);

//   $('<div>').addClass('profPic')
//   .appendTo($tweetHeader);

//   $('<img>').attr('src', data.small)
//   .appendTo($tweetHeader);

//   $('<p>').addClass('name').text(data.name)
//   .appendTo($tweetHeader);

//   $('<p>').addClass('username').text(data.handle)
//   .appendTo($tweetHeader);

//   $('<div>').addClass('tweet')
//   .appendTo($tweet);

//   $('<p>').addClass('content').text(data.content)
//   .appendTo($tweet);

//   $('<hr>').appendTo($tweet);

//   $('<div>').addClass('footer').text(data.created_at)
//   .appendTo($tweetFooter);

//   $('<span>').addClass('buttons')
//   .appendTo($tweetFooter);

//   $('<i>').addClass('fas fa-flag')
//   .appendTo($tweetFooter);

//   $('<i>').addClass('fas fa-retweet')
//   .appendTo($tweetFooter);

//   $('<i>').addClass('fas fa-heart')
//   .appendTo($tweetFooter);
//   console.log($tweet);
//   console.log($tweetHeader);
//   console.log($tweetFooter);
//   return $tweet;
// }

function renderTweets(tweets) {
  tweets.forEach(function (tweet) {
    $('#tweets-container').append(createTweetElement(tweet));
  });
}

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet);

$( document ).ready(function() {
  $('#tweetButton').on('submit', function (event) {
    event.preventDefault();
    console.log( $( this ).serialize())
  })
  renderTweets(tweetData);
});
