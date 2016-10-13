var fs = require('fs');
var keys = require("./keys.js")
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


var keyList = keys.twitterKeys
var command = process.argv[2]
var name = ""
for (j=3; j<process.argv.length; j++) {
	name = name+process.argv[j]+"+";
}

var client = new Twitter({
  consumer_key: keyList.consumer_key,
  consumer_secret: keyList.consumer_secret,
  access_token_key: keyList.access_token_key,
  access_token_secret: keyList.access_token_secret
});
 
var params = {screen_name: '_LastOrder'};

if (command == "my-tweets") {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    		
    		for (i=0; i<20; i++) {
    			console.log("===================================")
    			console.log("")
    			console.log("_LastOrder tweeted: " + JSON.stringify(tweets[i].text, null, 2));
    			console.log("")
    			console.log("Created at: " + JSON.stringify(tweets[i].created_at, null, 2));
    			console.log("")
    			console.log("===================================")
    		}
  		}
	});
}
else if (command == "spotify-this-song") {
	if (name != "") {
		spotify.search({ type: 'track', query: name }, function(err, data) {
    		if (!err) {
		    console.log(JSON.stringify(data, null, 2));
			}
		})
	}
    else {
		spotify.search({ type: 'track', query: "The Sign"}, function(err, data) {
    		if (!err) {
		    console.log(JSON.stringify(data, null, 2));
			}
    })
    }
 
}
else if (command == "movie-this") {
}
else if (command == "do-what-it-says") {
}



fs.readFile("random.txt", "utf8", function(err, data){
	var random = data
	console.log(random)
})