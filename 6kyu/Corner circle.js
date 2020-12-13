// A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.
// https://i.imgur.com/9HWl86o.png
// What is the radius of the smaller circle, rounded to two decimal places?

function cornerCircle(r) {
  let result;
  result = r * (Math.sqrt(2) - 1) / (Math.sqrt(2) + 1);
  return +result.toFixed(2);
}
console.log(cornerCircle(17));