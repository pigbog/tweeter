/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
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
          ${tweets["content"]["text"]}
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
		$('.tweet-container').append(createTweetElement(tweetdata[indTweets]))
	}
}



renderTweets(data);