var apiKey = require('./../.env').apiKey;

function Lookup(username) {
	this.username = username.toString();
}
Lookup.prototype.getRepos = function(username, displayFunction) {
	$.get('https://api.github.com/users/' + username + '/repos?access_token=' +
		apiKey).then(function(response) {
		displayFunction(response);
		console.log(response);
	}).fail(function(error) {
		console.log(error.responseJSON.message);
	});
};
exports.LookupModule = Lookup;
