var romanToInt = function (s) {
  let answer = 0;
  let lastAddedValue = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const array = s.split("");
  const revArray = array.reverse();
  for (let i = 0; i < revArray.length; i++) {
    if (lastAddedValue <= roman[revArray[i]]) {
      answer = answer + roman[revArray[i]];
      lastAddedValue = roman[revArray[i]];
    } else {
      answer = answer - roman[revArray[i]];
    }
  }
  return answer;
};
console.log(romanToInt("XLIV")); //44
console.log(romanToInt("LIV")); //54
