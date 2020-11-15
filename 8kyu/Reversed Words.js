//Complete the solution so that it reverses all of the words within the string passed in.
//Example:
//reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str) {
  let arr = str
    .split(" ")
    .map((e) => e.trim())
    .reverse()
    .join(' ');
  return arr;
}
console.log(reverseWords("yoda doesn't speak like this"));