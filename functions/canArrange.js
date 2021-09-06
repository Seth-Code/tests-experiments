const obj = {};
let initialized = false;

function canArrange(arr, k) {
  //initialize an object version of arr
  if (!initialized) {
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    initialized = true;
  }
  // console.log(obj);
  const objKeys = Object.keys(obj);
  // console.log(objKeys);

  //check if all items have been paired
  let pairedNumbers = 0;
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === false) {
      pairedNumbers++;
    }
  }
  // console.log("paired numbers", pairedNumbers);
  if (pairedNumbers === objKeys.length) {
    return true;
  }

  //find first item that is not paired
  let firstTrue = "";
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === true) {
      firstTrue = objKeys[i];
    }
  }

  //find pairs and set them to false in obj
  for (let i = 0; i < objKeys.length; i++) {
    if (
      (Number(firstTrue) + Number(objKeys[i])) % k === 0 &&
      obj[objKeys[i]] === true
    ) {
      // console.log("\n", firstTrue);
      // console.log(objKeys[i]);
      // console.log(firstTrue + objKeys[i]);
      obj[firstTrue] = false;
      obj[objKeys[i]] = false;
      return canArrange(arr, k);
    } else if (i === objKeys.length - 1) {
      return false;
    }
  }
}
//should log false, and does, but not on leetcode.com
console.log(canArrange([1, 2, 3, 4, 5, 6], 10));
