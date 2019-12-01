const palindromes = function(string) {
  // remove all punctuation and whitespace
  let stripped = string.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  for (let i = 0; i < Math.floor(stripped.length/2) ; i++) {
    // compare start and end characters, then move inwards to the middle
    if (stripped[i] !== stripped[stripped.length-i-1]) return false;
  }
  return true;
}

module.exports = palindromes
