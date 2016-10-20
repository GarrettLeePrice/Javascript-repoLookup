(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "eb8972cd5051a92a3697aac981214ecf4cfe27b7";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var Lookup = require('./../js/repoLookup.js').LookupModule;
var showResults = function(userData) {
  userData.forEach(function(data) {
    $('.repoResults ol').append("<li>" + data.name + "</li>");
  });
};
$(document).ready(function() {
  $("#submitName").click(function() {
    $(".repoResults ol").empty();
    var username = $("#userName").val();
    $('.userName').text("below are the repositories in " + username +
      "'s account - ");
    var newLookup = new Lookup(username);
    newLookup.getRepos(newLookup.username, showResults);
  });
});

},{"./../js/repoLookup.js":2}]},{},[3]);
