const palindromes = function(string) {
  let stripped = string.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  for (let i = 0; i < Math.floor(stripped.length/2) ; i++) {
    if (stripped[i] !== stripped[stripped.length-i-1]) return false;
  }
  return true;
}

module.exports = palindromes
