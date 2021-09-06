var convert = function (s, numRows) {
  const grid = {};
  for (let i = 1; i < numRows + 1; i++) {
    grid[i] = [];
  }

  const array = s.split("");
  let zagState = false;
  let row = 1;

  for (let j = 0; j < array.length; j++) {
    if (zagState === false) {
      grid[row].push(array[j]);
      row++;
      if (row > numRows) {
        row--;
        if (numRows != 1) {
          zagState = true;
        }
      }
    } else if (zagState === true) {
      row--;
      grid[row].push(array[j]);
      if (row === 1) {
        row++;
        zagState = false;
      }
    }
  }
  const answerArray = [];
  for (let t = 1; t < numRows + 1; t++) {
    const filledRow = grid[t].join("");
    answerArray.push(filledRow);
  }
  const answer = answerArray.join("");
  return answer;
};
console.log(convert("AB", 1));
