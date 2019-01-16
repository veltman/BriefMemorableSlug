var adjectives = require("./adjectives.json"),
  animals = require("./animals.json");

var NUM_ADJECTIVES = adjectives.length,
  NUM_ANIMALS = animals.length;

module.exports = function() {
  return generate().join("");
};

module.exports.array = generate;

function generate() {
  var i = Math.floor(Math.random() * NUM_ADJECTIVES),
    j = Math.floor(Math.random() * NUM_ADJECTIVES - 1),
    k = Math.floor(Math.random() * NUM_ANIMALS);
  if (j >= i) {
    j++;
  }
  return [adjectives[i], adjectives[j], animals[k]];
}
