// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

function sumEvenNumbers(input) {
  let result = 0;
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      newArr.push(input[i]);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    result += newArr[j];
  }
  return result;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
