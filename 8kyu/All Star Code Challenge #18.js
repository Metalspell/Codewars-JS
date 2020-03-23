// Create a function called that accepts 2 string
// arguments and returns an integer of the count of
// occurrences the 2nd argument is found in the first one.
// If no occurrences can be found,
// a count of 0 should be returned.

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
  let strArr = str.split('');
  let counter = 0;
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === letter) {
      counter += 1;
    }
  }
  return counter;
}

console.log(strCount("Helllo", "l"));