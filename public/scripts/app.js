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
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
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
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
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
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
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

function renderTweets(tweets) {
  for(users in tweets) {
      let tweet = tweets[users];
      createTweetElement(tweet)
  }
   $('#tweets-container').append(tweet);
}


function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');
  let $header = $('<header>').addClass('tweet-header');
  let $userimg = $('<img>').addClass('userphoto').prepend("${tweet.user.avatars.small}");
  let $username = $('<h2>').addClass('username');
  let $userhandle = $('<h4>').addClass('userhandle');
  let $tweetcontent = $('<p>');
  let $tweetfooter = $('<footer>').addClass('tweet-header');
  let $flagimg = $('<img>').addClass('img').prepend("https://image.flaticon.com/icons/svg/148/148878.svg");
  let $retweetimg = $('<img>').addClass('img').prepend("https://image.flaticon.com/icons/svg/148/148752.svg");
  let $heartimg = $('<img>').addClass('img').prepend("https://image.flaticon.com/icons/svg/148/148836.svg");
  $header.append($userimg, $username, $userhandle);
  $tweetfooter.append($flagimg, $retweetimg, $heartimg);
  $tweet.append($header, $tweetcontent, $tweetfooter);
  return $tweet;
}

console.log(renderTweets(data));

});


