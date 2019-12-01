const caesar = function(string, offset) {
  // wrap negative offsets
  if (offset < 0)
    return caesar(string, offset + 26);

  let chypher = "";
  [...string].forEach(char => {
    let code = char.charCodeAt(0)
    if (code >= 65 && code <= 90){
      // lowercase
      chypher += String.fromCharCode(((code - 65 + offset) % 26) + 65);
    } else if(code >= 97 && code <= 122){
      // uppercase
      chypher += String.fromCharCode(((code - 97 + offset) % 26) + 97);
    } else {
      // other characters
      chypher += char;
    }
  });
  return chypher;
}

module.exports = caesar
