var numJewelsInStones = function (jewels, stones) {
  const myJewels = [];
  const jewelsArray = jewels.split("");
  const stonesArray = stones.split("");
  for (let i = 0; i < jewelsArray.length; i++) {
    for (let j = 0; j < stonesArray.length; j++) {
      if (jewelsArray[i] === stonesArray[j]) {
        myJewels.push(stonesArray[j]);
      }
    }
  }
  return myJewels.length;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
