var fs = require('fs');
var keys = require("./keys.js")
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


var keyList = keys.twitterKeys
var command = process.argv[2]
var userQuery = ""
for (j=3; j<process.argv.length; j++) {
	userQuery = userQuery+process.argv[j]+" ";
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
	if (userQuery != "") {
		spotify.search({ type: 'track', query: userQuery }, function(err, data) {
    		if (!err) {
    		console.log("=======================================")
    		console.log("")
		    console.log("Artist: "+data.tracks.items[0].artists[0].name);
		    console.log("Song: "+data.tracks.items[0].name);
		    console.log("Preview link: "+data.tracks.items[0].preview_url);
		    console.log("Album Name "+data.tracks.items[0].album.name);
		console.log("")
			console.log("=======================================")
			}
		})
	}
    else {
		spotify.search({ type: 'track', query: "The Sign Ace of Base"}, function(err, data) {
    		if (!err) {
    		console.log("=======================================")
    		console.log("")
		    console.log("Artist: "+data.tracks.items[0].artists[0].name);
		    console.log("Song: "+data.tracks.items[0].name);
		    console.log("Preview link: "+data.tracks.items[0].preview_url);
		    console.log("Album Name "+data.tracks.items[0].album.name);
		console.log("")
			console.log("=======================================")
			}
    })
    }
}
else if (command == "movie-this") {
	if (userQuery != "") {
		var queryUrl = 'http://www.omdbapi.com/?t=' + userQuery +'&y=&plot=short&r=json';
		request(queryUrl, function (err, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!err) {

		console.log("=======================================")
   		console.log("")
   		console.log("Title: "+JSON.parse(body)["Title"])
		console.log("Year released: "+JSON.parse(body)["Year"])
		console.log("imdb Rating: "+JSON.parse(body)["imdbRating"])
		console.log("Country: "+JSON.parse(body)["Country"]) 
		console.log("Language: "+JSON.parse(body)["Language"])	
		console.log("Plot: "+JSON.parse(body)["Plot"]) 
		console.log("Actors: "+JSON.parse(body)["Actors"]) 
	}
})
}
	else {
	request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json", function (err, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!err) {

		console.log("=======================================")
   		console.log("")
   		console.log("Title: "+JSON.parse(body)["Title"])
		console.log("Year released: "+JSON.parse(body)["Year"])
		console.log("imdb Rating: "+JSON.parse(body)["imdbRating"])
		console.log("Country: "+JSON.parse(body)["Country"]) 
		console.log("Language: "+JSON.parse(body)["Language"])	
		console.log("Plot: "+JSON.parse(body)["Plot"]) 
		console.log("Actors: "+JSON.parse(body)["Actors"]) 
	}
})		
	}
}
else if (command == "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(err, data){
	var random = data.split(",")
	var userQuery = random[1];
if (random[0] == "my-tweets") {
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
else if (random[0] == "spotify-this-song") {
	if (userQuery != "") {
		spotify.search({ type: 'track', query: userQuery }, function(err, data) {
    		if (!err) {
    		console.log("=======================================")
    		console.log("")
		    console.log("Artist: "+data.tracks.items[0].artists[0].name);
		    console.log("Song: "+data.tracks.items[0].name);
		    console.log("Preview link: "+data.tracks.items[0].preview_url);
		    console.log("Album Name "+data.tracks.items[0].album.name);
		console.log("")
			console.log("=======================================")
			}
		})
	}
    else {
		spotify.search({ type: 'track', query: "The Sign Ace of Base"}, function(err, data) {
    		if (!err) {
    		console.log("=======================================")
    		console.log("")
		    console.log("Artist: "+data.tracks.items[0].artists[0].name);
		    console.log("Song: "+data.tracks.items[0].name);
		    console.log("Preview link: "+data.tracks.items[0].preview_url);
		    console.log("Album Name "+data.tracks.items[0].album.name);
		console.log("")
			console.log("=======================================")
			}
    })
    }
}
else if (random[0] == "movie-this") {
	if (userQuery != "") {
		var queryUrl = 'http://www.omdbapi.com/?t=' + userQuery +'&y=&plot=short&r=json';
		request(queryUrl, function (err, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!err) {

		console.log("=======================================")
   		console.log("")
   		console.log("Title: "+JSON.parse(body)["Title"])
		console.log("Year released: "+JSON.parse(body)["Year"])
		console.log("imdb Rating: "+JSON.parse(body)["imdbRating"])
		console.log("Country: "+JSON.parse(body)["Country"]) 
		console.log("Language: "+JSON.parse(body)["Language"])	
		console.log("Plot: "+JSON.parse(body)["Plot"]) 
		console.log("Actors: "+JSON.parse(body)["Actors"]) 
	}
})
}
	else {
	request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json", function (err, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!err) {

		console.log("=======================================")
   		console.log("")
   		console.log("Title: "+JSON.parse(body)["Title"])
		console.log("Year released: "+JSON.parse(body)["Year"])
		console.log("imdb Rating: "+JSON.parse(body)["imdbRating"])
		console.log("Country: "+JSON.parse(body)["Country"]) 
		console.log("Language: "+JSON.parse(body)["Language"])	
		console.log("Plot: "+JSON.parse(body)["Plot"]) 
		console.log("Actors: "+JSON.parse(body)["Actors"]) 
	}
})		
	}
}})
}



