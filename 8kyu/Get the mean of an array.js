//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

The array will never be empty.
let result = 0;
let sum = 0;
function getAverage(marks) {
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  result = Math.floor(sum / marks.length);
  return result;
}
console.log(getAverage([1,2,15,15,17,11,12,17,17,14,13,15,6,11,8,7]));