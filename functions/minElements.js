var minElements = function (nums, limit, goal) {
  let numsValue = 0;
  for (let i = 0; i < nums.length; i++) {
    numsValue += nums[i];
  }

  const difference = Math.abs(goal - numsValue);
  let minElements = Math.floor(difference / limit);
  if (minElements < difference / limit) {
    minElements++;
  }
  return minElements;
};
console.log(minElements([1, -1, 1], 3, -4));
