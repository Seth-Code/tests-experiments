//more of a reorganize than a shuffle (i don't name them)
function restoreString(s, indices) {
  const length = indices.length;
  const sArray = s.split("");
  const shuffledArray = new Array(length).fill(null);

  for (let i = 0; i < length; i++) {
    const index = indices[i];
    const item = sArray[i];
    shuffledArray[index] = item;
    // console.log(shuffledArray);
  }
  const shuffled = shuffledArray.join("");
  return shuffled;
}
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
