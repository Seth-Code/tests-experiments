var minPartitions = function (n) {
  const digitStringArray = n.split("");
  const digitArray = digitStringArray.map((x) => parseInt(x));
  return Math.max(...digitArray);
};
console.log(minPartitions("320"));
