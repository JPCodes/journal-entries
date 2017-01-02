(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var output = [];

function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.id = output.length + 1;
}

Entry.prototype.journal_entry = function(entry_object) {
  output.push(entry_object);
  return output;
};

Entry.prototype.entry_length = function(entry_body) {
  var result = entry_body.split(" ").length;
  return result;
};

Entry.prototype.count_vowels = function() {
  vowel_count = 0;
  debugger;
  this.body.toLowerCase().split("").forEach(function(element) {
    debugger;
    if ((/[aeiou]/).test(element)) {
    debugger;
      vowel_count++;
    }
  });
  return vowel_count;
};

find_object = function(id) {
  var foundObject = null;
  output.forEach(function(element) {
    if (element.id === id) {
      foundObject = element;
    }
  });
  return foundObject;
};


exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal-entry').submit(function(event) {
    // debugger;
    event.preventDefault();
    $('#entries').empty();
    $('#entry-attribute').empty();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var output = entry.journal_entry(entry);
    var counter = 0;
    output.forEach(function(element) {
      counter++;
      $('#entries').append("<li>" + element.title + "</li>" + "<li>" + element.body + "</li>" + "<button class='" + counter + " journal' type='submit'>How many words?</button>" + "<button class='" + counter + " journal-vowel' type='submit'>How many vowels?</button>");
    });
    $('.journal').click(function() {
      entrySpot = parseInt($(this).attr("class"));
      var selectedEntry = find_object(entrySpot);
      var result = selectedEntry.entry_length(entry.body);
      $('#entry-attribute').append("length: " + result);
    });

    $('.journal-vowel').click(function() {
      entrySpot = parseInt($(this).attr("class"));
      var selectedEntry = find_object(entrySpot);
      var result = selectedEntry.count_vowels();
      $('#entry-attribute').append("Vowel Count: " + result);
    });
  });
});

},{"./../js/entry.js":1}]},{},[2]);
