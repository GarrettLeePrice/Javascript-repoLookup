var apiKey = require('./../.env').apiKey;

var repoLookup = function() {

};



repoLookup.prototype.getRepos = function(){
  $.get('https://api.github.com/users/garrettleeprice?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoLookupModule = repoLookup;
