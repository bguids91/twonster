/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {

$.ajax('/tweets').done(renderTweets);

$('#error-mes-1').hide();
$('#error-mes-2').hide();

$('form#new-tweet-form').on('submit', function (e) {
  e.preventDefault();
  let formData = $('#tweet-text').serialize();
  let text = $('#tweet-text').val();

  if(text === "" || text === null) {
    $('#error-mes-2').hide();
    $('#error-mes-1').show('fast');
    return console.error();
  }
  if(text.length > 140) {
    $('#error-mes-1').hide();
    $('#error-mes-2').show('fast');
    return console.error();
  } else {
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
      $('#error-mes-1').hide();
      $('#error-mes-2').hide();
      return $.ajax('/tweets');
    }).then(renderTweets);
  }
});


function renderTweets(tweets) {
  for(let users in tweets) {
      let tweet = tweets[users];
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
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

$('#new-tweet').hide();
$('#compose-tweet').on('click', function() {
  $('#new-tweet').toggle();
  $('#tweet-text').focus();
});

// $('#error-mes').hide()
// $('#submit-button').on('submit', function() {
//   let text = $('#tweet-text').val();
//   if(text === "") {
//     ('#error-mes').show();
//   }
// });

});

// function callTweetsFromMongoDb() {

//   $.ajax({
//     url: '/tweets',
//     method: 'GET',
//     success: function (result) {
//       console.log("we are in success");
//       renderTweets(result);
//     },
//     error: function (err) {
//       console.log("we are in error");
//     }
//   });
// }

// callTweetsFromMongoDb();
