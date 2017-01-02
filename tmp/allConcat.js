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
      $('#entries').append("<li>" + element.title + "</li>" + "<li>" + element.body + "</li>" + "<button class='" + counter + " journal' type='submit'>How many words?</button>" + "<button class='" + counter + " journal-vowel' type='submit'>How many vowels?</button>" + "<button class='" + counter + " journal-consonant' type='submit'>How many consonants?</button>" + "<button class='" + counter + " teaser' type='submit'>Get Teaser</button>");
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

    $('.journal-consonant').click(function() {
      entrySpot = parseInt($(this).attr("class"));
      var selectedEntry = find_object(entrySpot);
      var result = selectedEntry.count_consonants();
      $('#entry-attribute').append("Consonant Count: " + result);
    });

    $('.teaser').click(function() {
      entrySpot = parseInt($(this).attr("class"));
      var selectedEntry = find_object(entrySpot);
      var result = selectedEntry.getTeaser();
      $('#entry-attribute').append("Consonant Count: " + result);
    });
  });
});
