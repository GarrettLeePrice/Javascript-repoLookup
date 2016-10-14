var repoLookup = require('./../js/repoLookup.js').repoLookupModule;



$(document).ready(function(){
  var fuck = new repoLookup();

  $("#searchName").submit(function(event) {
    event.preventDefault();
    var user = $("#userName").val();
    var currentRepo = new repoLookup(user);
    currentRepo.getRepos();

  });
});
