var buildArray = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};
console.log(buildArray([0, 2, 1, 5, 3, 4]));

var getConcatenation = function (nums) {
  const ans = nums.concat(nums);
  return ans;
};
console.log(getConcatenation([1, 2, 1]));
