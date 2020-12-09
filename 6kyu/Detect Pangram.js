// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let result;
  let arr = [];
  for (let i = 1; i < 27; i++) {
    arr.push(string.charCodeAt(i));
    for (let j = 0; j < arr.length; j++) {
      if (string.charCodeAt(i) === arr[j]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
}
isPangram("The quick brown fox jumps over the lazy dog.");