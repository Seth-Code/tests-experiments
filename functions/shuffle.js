var shuffle = function (nums, n) {
  const xArray = nums.slice(0, n);
  const yArray = nums.slice(n, nums.length);
  const shuffledArray = [];
  for (let i = 0; i < xArray.length; i++) {
    shuffledArray.push(xArray[i]);
    shuffledArray.push(yArray[i]);
  }
  return shuffledArray;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
