var reverse = function (x) {
  if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
    return 0;
  }
  const neg = Math.sign(x);
  const stringInt = x.toString();
  const stringIntArray = stringInt.split("");
  const reversedArray = stringIntArray.reverse();
  const reversedString = reversedArray.join("");
  const posAnswer = parseInt(reversedString);
  const negAnswer = 0 - posAnswer;
  if (neg === -1) {
    if (negAnswer < -(2 ** 31)) {
      return 0;
    }
    return negAnswer;
  } else {
    if (posAnswer > 2 ** 31 - 1) {
      return 0;
    }
    return posAnswer;
  }
};
console.log(reverse(1234567899));
