var kidsWithCandies = function (candies, extraCandies) {
  const enoughExtra = [];
  const fattestKid = Math.max(...candies);
  candies.forEach((kid) => {
    if (kid + extraCandies >= fattestKid) {
      enoughExtra.push(true);
    } else {
      enoughExtra.push(false);
    }
  });
  return enoughExtra;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
