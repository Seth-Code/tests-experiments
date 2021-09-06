var isPalindrome = function (x) {
  if (Math.sign(x) === -1) {
    return false;
  }
  const string = x.toString();
  const stringArray = string.split("");
  const reversedArray = stringArray.reverse();
  const reversedString = reversedArray.join("");
  console.log(reversedString);
  if (reversedString === string) {
    return true;
  }
  return false;
};
console.log(isPalindrome(10));
