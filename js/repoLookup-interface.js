var Lookup = require('./../js/repoLookup.js').LookupModule;

var showResults = function(userData) {
  userData.forEach(function(data) {
    $('.repoResults ol').append("<li>" + data.name + "</li>");
    });
};










$(document).ready(function() {
  $("#submitName").click(function(){
    // event.preventDefault();
    var username = $("#userName").val();
    var newLookup = new Lookup(username);

    newLookup.getRepos(newLookup.username, showResults);
    // $('.userName').text(ghUser);
  });
});


  // $(".repoResults ol").append("<li>" + userRepos.id + "</li>");
