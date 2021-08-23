// var minPartitions = function (n) {
//   const digitStringArray = n.split("");
//   const digitArray = digitStringArray.map((x) => parseInt(x));
//   return Math.max(...digitArray);
// };
// console.log(minPartitions("320"));

// var shuffle = function (nums, n) {
//   const xArray = nums.slice(0, n);
//   const yArray = nums.slice(n, nums.length);
//   const shuffledArray = [];
//   for (let i = 0; i < xArray.length; i++) {
//     shuffledArray.push(xArray[i]);
//     shuffledArray.push(yArray[i]);
//   }
//   return shuffledArray;
// };
// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// var maximumWealth = function (accounts) {
//   const wealthPerCustomer = [];
//   for (let i = 0; i < accounts.length; i++) {
//     const customerAccounts = accounts[i];
//     let customerWealth = 0;
//     for (let j = 0; j < customerAccounts.length; j++) {
//       customerWealth += customerAccounts[j];
//     }
//     wealthPerCustomer.push(customerWealth);
//   }
//   return Math.max(...wealthPerCustomer);
// };
// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );

// var interpret = function (command) {
//   const parseOs = command.replaceAll("()", "o");
//   return parseOs.replaceAll("(al)", "al");
// };
// console.log(interpret("G()()()()(al)"));

// var kidsWithCandies = function (candies, extraCandies) {
//   const enoughExtra = [];
//   const fattestKid = Math.max(...candies);
//   candies.forEach((kid) => {
//     if (kid + extraCandies >= fattestKid) {
//       enoughExtra.push(true);
//     } else {
//       enoughExtra.push(false);
//     }
//   });
//   return enoughExtra;
// };
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// var numIdenticalPairs = function (nums) {
//   let goodPairs = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         goodPairs++;
//       }
//     }
//   }
//   return goodPairs;
// };
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// var numJewelsInStones = function (jewels, stones) {
//   const myJewels = [];
//   const jewelsArray = jewels.split("");
//   const stonesArray = stones.split("");
//   for (let i = 0; i < jewelsArray.length; i++) {
//     for (let j = 0; j < stonesArray.length; j++) {
//       if (jewelsArray[i] === stonesArray[j]) {
//         myJewels.push(stonesArray[j]);
//       }
//     }
//   }
//   return myJewels.length;
// };
// console.log(numJewelsInStones("aA", "aAAbbbb"));

// var countPoints = function(points, queries) {
//     const answer = Array(queries.length).fill(0)
//     for (let i = 0; i < points.length; i++) {
//         const x1 = points[i][0]
//         const y1 = points[i][1]
//         for (let j = 0; j < queries.length; j++) {
//             const x2 = queries[j][0]
//             const y2 = queries[j][1]
//             const r = queries[j][2]
//             let distance = Math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2))
//             if (((distance**2) <= (r**2))) {
//                 answer[j]++
//             }
//         }

//     }
//     return answer
// };
// console.log(countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]]))

// var minOperations = function (boxes) {
//     const boxesArray = [];
//     const boxesStringArray = boxes.split("");
//     boxesStringArray.forEach((symbol) => {
//       boxesArray.push(parseInt(symbol));
//     });
//     console.log(boxesArray);
//     const answer = Array(boxes.length).fill(0);
//     for (let i = 0; i < boxesArray.length; i++) {
//       for (let j = 0; j < boxesArray.length; j++) {
//         let difference = 0;
//         if (boxesArray[j] === 1) {
//           difference += Math.abs(i - j);
//           console.log(difference);
//         }
//         answer[i] += difference;
//       }
//     }
//     return answer;
//   };

// var minOperations = function (boxes) {
//   const boxesArray = boxes.split("");
//   console.log(boxesArray);
//   const answer = Array(boxes.length).fill(0);
//   for (let i = 0; i < boxesArray.length; i++) {
//     for (let j = 0; j < boxesArray.length; j++) {
//       let difference = 0;
//       if (boxesArray[j] === "1") {
//         difference += Math.abs(i - j);
//         answer[i] += difference;
//       }
//     }
//   }
//   return answer;
// };
// console.log(minOperations("110"));

// var smallerNumbersThanCurrent = function (nums) {
//   const answer = Array(nums.length).fill(0);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] < nums[i] && i != j) {
//         answer[i]++;
//       }
//     }
//   }
//   return answer;
// };
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// var reverse = function (x) {
//   if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
//     return 0;
//   }
//   const neg = Math.sign(x);
//   const stringInt = x.toString();
//   const stringIntArray = stringInt.split("");
//   const reversedArray = stringIntArray.reverse();
//   const reversedString = reversedArray.join("");
//   const posAnswer = parseInt(reversedString);
//   const negAnswer = 0 - posAnswer;
//   if (neg === -1) {
//     if (negAnswer < -(2 ** 31)) {
//       return 0;
//     }
//     return negAnswer;
//   } else {
//     if (posAnswer > 2 ** 31 - 1) {
//       return 0;
//     }
//     return posAnswer;
//   }
// };
// console.log(reverse(1234567899));

// var isPalindrome = function (x) {
//   if (Math.sign(x) === -1) {
//     return false;
//   }
//   const string = x.toString();
//   const stringArray = string.split("");
//   const reversedArray = stringArray.reverse();
//   const reversedString = reversedArray.join("");
//   console.log(reversedString);
//   if (reversedString === string) {
//     return true;
//   }
//   return false;
// };
// console.log(isPalindrome(10));

// var romanToInt = function (s) {
//   let answer = 0;
//   let lastAddedValue = 0;
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   const array = s.split("");
//   const revArray = array.reverse();
//   for (let i = 0; i < revArray.length; i++) {
//     if (lastAddedValue <= roman[revArray[i]]) {
//       answer = answer + roman[revArray[i]];
//       lastAddedValue = roman[revArray[i]];
//     } else {
//       answer = answer - roman[revArray[i]];
//     }
//   }
//   return answer;
// };
// console.log(romanToInt("XLIV")); //44
// console.log(romanToInt("LIV")); //54

// var removeDuplicates = function (nums) {
//   let lastValue = nums[0];
//   console.log("initial lastValue:", lastValue, "\n");
//   let k = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != lastValue) {
//       k++;
//       lastValue = nums[i];
//     } else if (nums[i] === lastValue) {
//       nums.splice(i, 1);
//       i = i - 1;
//     }
//   }
//   console.log(k);
//   return k;
// };
// console.log(removeDuplicates([1, 1, 2]));

// var convert = function (s, numRows) {
//   const grid = {};
//   for (let i = 1; i < numRows + 1; i++) {
//     grid[i] = [];
//   }

//   const array = s.split("");
//   let zagState = false;
//   let row = 1;

//   for (let j = 0; j < array.length; j++) {
//     if (zagState === false) {
//       grid[row].push(array[j]);
//       row++;
//       if (row > numRows) {
//         row--;
//         if (numRows != 1) {
//           zagState = true;
//         }
//       }
//     } else if (zagState === true) {
//       row--;
//       grid[row].push(array[j]);
//       if (row === 1) {
//         row++;
//         zagState = false;
//       }
//     }
//   }
//   const answerArray = [];
//   for (let t = 1; t < numRows + 1; t++) {
//     const filledRow = grid[t].join("");
//     answerArray.push(filledRow);
//   }
//   const answer = answerArray.join("");
//   return answer;
// };
// console.log(convert("AB", 1));

// var minElements = function (nums, limit, goal) {
//   let numsValue = 0;
//   for (let i = 0; i < nums.length; i++) {
//     numsValue += nums[i];
//   }

//   const difference = Math.abs(goal - numsValue);
//   let minElements = Math.floor(difference / limit);
//   if (minElements < difference / limit) {
//     minElements++;
//   }
//   return minElements;
// };
// console.log(minElements([1, -1, 1], 3, -4));

// const obj = {};
// let initialized = false;
// function canArrange(arr, k) {
//   //initialize an object version of arr
//   if (!initialized) {
//     for (let i = 0; i < arr.length; i++) {
//       obj[arr[i]] = true;
//     }
//     initialized = true;
//   }
//   // console.log(obj);
//   const objKeys = Object.keys(obj);
//   // console.log(objKeys);

//   //check if all items have been paired
//   let pairedNumbers = 0;
//   for (let i = 0; i < objKeys.length; i++) {
//     if (obj[objKeys[i]] === false) {
//       pairedNumbers++;
//     }
//   }
//   // console.log("paired numbers", pairedNumbers);
//   if (pairedNumbers === objKeys.length) {
//     return true;
//   }

//   //find first item that is not paired
//   let firstTrue = "";
//   for (let i = 0; i < objKeys.length; i++) {
//     if (obj[objKeys[i]] === true) {
//       firstTrue = objKeys[i];
//     }
//   }

//   //find pairs and set them to false in obj
//   for (let i = 0; i < objKeys.length; i++) {
//     if (
//       (Number(firstTrue) + Number(objKeys[i])) % k === 0 &&
//       obj[objKeys[i]] === true
//     ) {
//       // console.log("\n", firstTrue);
//       // console.log(objKeys[i]);
//       // console.log(firstTrue + objKeys[i]);
//       obj[firstTrue] = false;
//       obj[objKeys[i]] = false;
//       return canArrange(arr, k);
//     } else if (i === objKeys.length - 1) {
//       return false;
//     }
//   }
// }
// //should log false, and does, but not on leetcode.com
// console.log(canArrange([1, 2, 3, 4, 5, 6], 10));

// function twoSum(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) {
//         if (array[i] + array[j] === num) {
//           const ans = [i, j];
//           return ans;
//         }
//       }
//     }
//   }
//   return false;
// }

// function wilVersion(array, num) {
//   const hashMap = {};
//   for (let i = 0; i < array.length; i++) {
//     hashMap[array[i]] = i;
//   }
//   for (let i = 0; i < array.length; i++) {
//     const dif = num - array[i];
//     if (hashMap[dif] && hashMap[dif] !== i) {
//       return true;
//     }
//   }
//   return false;
// }

// var buildArray = function(nums) {
//     const ans = []
//     for (let i = 0; i < nums.length; i++) {
//       ans.push(nums[nums[i]])
//     }
//     return ans;
// };
// console.log(buildArray([0,2,1,5,3,4]))

// var getConcatenation = function(nums) {
//     const ans = nums.concat(nums)
//     return ans
// };
// console.log(getConcatenation([1,2,1]))
