var apiKey = require('./../.env').apiKey;

function repoLookup() {

};



repoLookup.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/garrettleeprice?access_token=' + apiKey).then(function(response){
    $(".repoResults ol").append("<li>" + response + "</li>");

    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoLookupModule = repoLookup;
