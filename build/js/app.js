(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "eb8972cd5051a92a3697aac981214ecf4cfe27b7";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

var repoLookup = function() {

};



repoLookup.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/garrettleeprice?access_token=' + apiKey).then(function(response){
    $(".repoResults ol").append("<li>" + user + "</li>");

    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.repoLookupModule = repoLookup;

},{"./../.env":1}],3:[function(require,module,exports){
var repoLookup = require('./../js/repoLookup.js').repoLookupModule;



$(document).ready(function(){
  // var fuck = new repoLookup();

  $("#searchName").submit(function(event) {
    event.preventDefault();
    var user = $("#userName").val();
    var currentRepo = new repoLookup(user);
    currentRepo.getRepos();

  });
});

},{"./../js/repoLookup.js":2}]},{},[3]);
