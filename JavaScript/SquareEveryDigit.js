function squareDigits(num){
  //may the code be with you
  var numString = num.toString();
  var results = [];
  for(var i = 0; i<numString.length; i++) {
  results.push(Math.pow(numString[i], 2));
}
  return Number(results.join(''));
}
