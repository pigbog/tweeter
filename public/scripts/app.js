/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function escape(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweets){
  const $tweet = `
  <article class="tweets">
          <header>
           <img class="avatars" src="${tweets["user"]["avatars"]["small"]}"> 
           ${tweets.user.name}
           <span class="userID">
          ${tweets["user"]["handle"]}
          </span>
          </header>
          <div class="tweet-innards">
            ${escape(tweets["content"]["text"])}
          </div>

          <footer>
            ${moment(tweets.created_at).fromNow()}
              <div class="buttons">
                <a href="#"> <i class="fas fa-flag"></i> </a>
                <a href="#"> <i class="fas fa-retweet"></i> </a>
                <a href="#"> <i class="fas fa-heart"></i> </a>
              </div>
          </footer>
      </article>
  `;
  return $tweet;
}

function renderTweets(tweetdata){
  for (let indTweets in tweetdata){
    $('.tweet-container').prepend(createTweetElement(tweetdata[indTweets]));
  }
}

function loadTweets(){
  $.get("/tweets", function(response){
    renderTweets(response);
  }
  );
}

$(document).ready(
  loadTweets(),
  $(".error-message").hide(),
  $(".new-tweet").hide() );

var $button = $('#compose');
$button.on('submit', function () {
  event.preventDefault();
  let submission = $("#compose textarea").val();
  $button.serialize();
  if (submission === ''){
    let errorms = "<i class=\"fas fa-exclamation-triangle\"></i> Write something!";
    $(".error-message").html(errorms);
    $(".error-message").slideDown();
    return;
  }

  if (submission.length > 140 ){
    let errorms = "<i class=\"fas fa-exclamation-triangle\"></i> Too Long!";
    $(".error-message").html(errorms);
    $(".error-message").slideDown();
    return;
  }
  $.ajax({
    type: "POST",
    url: "/tweets",
    data:$('#compose').serialize()
  });
  $(".error-message").slideUp();
  $("#compose textarea").val('');
  $(".counter").text('140');
  $('.tweet-containter').replaceWith( loadTweets() );
});

$( "#compose-button" ).click(function() {
  $( ".new-tweet" ).slideToggle("slow");
  $("#tweet-body").focus();
  $(".error-message").slideUp();
});