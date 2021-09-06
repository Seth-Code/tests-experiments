var smallerNumbersThanCurrent = function (nums) {
  const answer = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && i != j) {
        answer[i]++;
      }
    }
  }
  return answer;
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
