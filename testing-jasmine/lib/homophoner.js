var _ = require('lodash-node');

module.exports = Homophoner;

function Homophoner(homophones) {
  this.dictionary = {};

  homophones.map((wordlist) => {
    wordlist.map((word) => {
      this.dictionary[word] = _.sortBy(_.difference(wordlist, [word]));
    });
  });

  this.lookup = function(word) {
    return this.dictionary[word] || [];
  }
}
