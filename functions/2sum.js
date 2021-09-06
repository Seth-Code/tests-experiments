function twoSum(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        if (array[i] + array[j] === num) {
          const ans = [i, j];
          return ans;
        }
      }
    }
  }
  return false;
}

function wilVersion(array, num) {
  const hashMap = {};
  for (let i = 0; i < array.length; i++) {
    hashMap[array[i]] = i;
  }
  for (let i = 0; i < array.length; i++) {
    const dif = num - array[i];
    if (hashMap[dif] && hashMap[dif] !== i) {
      return true;
    }
  }
  return false;
}
