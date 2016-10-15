var apiKey = require('./../.env').apiKey;

function Lookup (username) {
  this.username = username.toString();

}


Lookup.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    displayFunction(response);
    console.log(response);
    }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};







// Lookup.prototype.getUser = function(user, displayUser) {
//   $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response) {
//     console.log(response);
//     displayUser(user, response);
//   }).fail(function(error) {
//     console.log(error.responseJSON.message);
//   });
// };






exports.LookupModule = Lookup;
