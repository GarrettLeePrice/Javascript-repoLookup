var Lookup = require('./../js/repoLookup.js').LookupModule;
var showResults = function(userData) {
  userData.forEach(function(data) {
    $('.repoResults ol').append("<li>" + data.name + "</li>");
  });
};
$(document).ready(function() {
  $("#submitName").click(function() {
    var username = $("#userName").val();
    $('.userName').text("below are the repositories in " + username +
      "'s account - ");
    var newLookup = new Lookup(username);
    newLookup.getRepos(newLookup.username, showResults);
  });
});
