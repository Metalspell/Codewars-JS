function automorphic(n) {
  let result = "";
  let square = Math.pow(n, 2);
  let squareArr = String(square).split("");
  let nArr = [];
  nArr =  String(n).split("")
  if (n === +squareArr.slice(-(nArr.length)).join("")) {
    result = "Automorphic";
  } else {
    result = "Not!!";
  }
  return result;
}
console.log(automorphic(76));