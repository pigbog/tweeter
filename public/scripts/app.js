/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweets){
	
	const $tweet =
	`
	<article class="tweets">
          <header>
           <img class="avatars" src="${tweets["user"]["avatars"]["small"]}"> 
           ${tweets["user"]["name"]}
           <span class="userID">
          ${tweets["user"]["handle"]}
          </span>
          </header>
          <div class="tweet-innards">
      	  ${escape(tweets["content"]["text"])}
          </div>

          <footer>
            10 days ago
            <div class="buttons">
              <a href="#"> <i class="fas fa-flag"></i> </a>
              <a href="#"> <i class="fas fa-retweet"></i> </a>
              <a href="#"> <i class="fas fa-heart"></i> </a>
            </div>
          </footer>
      </article>
	`
	return $tweet
}

function renderTweets (tweetdata){
	for (let indTweets in tweetdata){
		$('.tweet-container').prepend(createTweetElement(tweetdata[indTweets]))
	}
}


function loadTweets(){
		$.get("/tweets", function(response){ 
			renderTweets(response);}
		)}

$(document).ready( loadTweets(),  $(".error-message").hide() )



$("#compose").on("submit", function (){
	$('.tweet-containter').replaceWith( loadTweets()	 )})
