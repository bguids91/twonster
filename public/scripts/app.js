/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function () {

const data = [{
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://image.flaticon.com/icons/svg/826/826599.svg",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
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
        "small": "https://image.flaticon.com/icons/svg/826/826610.svg",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://image.flaticon.com/icons/svg/826/826608.svg",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$.ajax('/tweets').done(renderTweets);

$('form#new-tweet-form').on('submit', function (e) {
  e.preventDefault();

  let formData = $('#tweet-text').serialize();
  console.log(formData);

  $.ajax({
    method:'POST',
    url: '/tweets',
    data: formData,
    success: function(result){
      console.log("The AJAX POST was successful");
    },
    error: function(err){
      console.log("There was an error in posting",err);
    }
  }).then(function () {
    $('#tweet-text').val('');
    $('#char-counter').text(140);
    $('#tweets-container').empty();
    return $.ajax('/tweets');
  }).then(renderTweets);
});




function renderTweets(tweets) {
  for(let users in tweets) {
      let tweet = tweets[users];
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
  }
}

function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');
  let $header = $('<header>').addClass('tweet-header');
  let $userimg = $('<img>').addClass('userphoto').attr('src', tweet.user.avatars.small);
  let $username = $('<h2>').addClass('username').text(`${tweet.user.name}`);
  let $userhandle = $('<h4>').addClass('userhandle').text(`${tweet.user.handle}`);
  let $tweetcontent = $('<p>').text(`${tweet.content.text}`);
  let $tweetfooter = $('<footer>').addClass('tweet-footer').text(`${tweet.created_at}`);
  let $flagimg = $('<img>').addClass('img').attr('src', "https://image.flaticon.com/icons/svg/148/148878.svg");
  let $retweetimg = $('<img>').addClass('img').attr('src', "https://image.flaticon.com/icons/svg/148/148752.svg");
  let $heartimg = $('<img>').addClass('img').attr('src', "https://image.flaticon.com/icons/svg/148/148836.svg");

  $header.append($userimg, $username, $userhandle);
  $tweetfooter.append($flagimg, $retweetimg, $heartimg);
  $tweet.append($header, $tweetcontent, $tweetfooter);
  return $tweet;
}

renderTweets(data);

});


