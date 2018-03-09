// Get the packages we need
var express = require('express');

// Create our Express application
var app = express();
var cors = require('cors')

app.use(cors())

// Use environment defined port or 4000
var port = process.env.PORT || 8888;

var SpotifyWebApi = require('spotify-web-api-node');

// Spotify credentials
var clientId = 'Your client id',
clientSecret = 'Your client secret';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
		clientId : clientId,
		clientSecret : clientSecret,
		redirectUri : 'http://localhost:8888/callback'
});

app.get('/get_access_token', function(req, res) {
	spotifyApi.clientCredentialsGrant()
		.then(function(data) {
		console.log('The access token expires in ' + data.body['expires_in']);
		console.log('The access token is ' + data.body['access_token']);
		res.send(data.body['access_token']);
		}, function(err) {
	    console.log('Something went wrong when retrieving an access token', err);
	});
});
// Start the server
app.listen(port);
console.log('Server running on port ' + port);
