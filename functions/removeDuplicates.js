var removeDuplicates = function (nums) {
  let lastValue = nums[0];
  console.log("initial lastValue:", lastValue, "\n");
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != lastValue) {
      k++;
      lastValue = nums[i];
    } else if (nums[i] === lastValue) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }
  console.log(k);
  return k;
};
console.log(removeDuplicates([1, 1, 2]));
