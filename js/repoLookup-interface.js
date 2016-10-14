var repoLookup = require('./../js/repoLookup.js').repoLookupModule;



$(document).ready(function(){
  var newLookup = new repoLookup();

  $("#searchName").submit(function(event) {
    event.preventDefault();
    var lookup = $("#userName").val();
    var currentRepo = new repoLookup(lookup)
    currentRepo.getRepos();

  });
});
