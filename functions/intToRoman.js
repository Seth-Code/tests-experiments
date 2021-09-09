function intToRoman(num) {
  let revAnsArray = [];

  // by [singles, fives] at index
  const romanIndex = {
    0: ["I", "V"],
    1: ["X", "L"],
    2: ["C", "D"],
    3: ["M", null],
  };

  const string = num.toString();
  const array = string.split("");
  const revArray = array.reverse();
  //   console.log(revArray);

  for (let i = 0; i < revArray.length; i++) {
    const int = Number(revArray[i]);
    // console.log(int);

    if (int === 5) {
      revAnsArray.push(romanIndex[i][1]);
    } else if (int < 5) {
      if (int <= 3) {
        for (let j = 0; j < int; j++) {
          revAnsArray.push(romanIndex[i][0]);
        }
      } else if (int === 4) {
        revAnsArray.push(romanIndex[i][1]);
        revAnsArray.push(romanIndex[i][0]);
        console.log(revAnsArray);
      }
    } else if (int > 5) {
      if (int <= 8) {
        const remainder = int - 5;
        for (let j = 0; j < remainder; j++) {
          revAnsArray.push(romanIndex[i][0]);
        }
        revAnsArray.push(romanIndex[i][1]);
      } else if (int === 9) {
        revAnsArray.push(romanIndex[i + 1][0]);
        revAnsArray.push(romanIndex[i][0]);
      }
    }
    // console.log(revAnsArray);
  }
  const revAns = revAnsArray.reverse();
  const ans = revAns.join("");
  return ans;
}

console.log(intToRoman(19));
