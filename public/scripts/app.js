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
            <p class="content">${escape(data.content.text)}</p>
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

function renderTweets(tweets) {
  tweets.forEach(function (tweet) {
    $('#tweets-container').append(createTweetElement(tweet));
  });
}

function loadTweets(){
    $.ajax({
    url: '/tweets',
    type: 'GET',
  }).then(function (obj){
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
    // console.log( $( this ).serialize())
      let text = $("textarea").val();
      event.preventDefault();
      if (text === '') {
        return alert('Empty!');
      } else if (text.length > lengthMax) {
        return alert('Too many characters!');
      } else {
           $.ajax({
            url: '/tweets',
            type: 'POST',
            data: $(this).serialize(),
          }).then(function (obj){
              loadTweets();
        })
      }
    })
  loadTweets();
});
