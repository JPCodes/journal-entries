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
  this.body.toLowerCase().split("").forEach(function(element) {
    if ((/[aeiou]/).test(element)) {
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
