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

var minOperations = function (boxes) {
  const boxesArray = boxes.split("");
  console.log(boxesArray);
  const answer = Array(boxes.length).fill(0);
  for (let i = 0; i < boxesArray.length; i++) {
    for (let j = 0; j < boxesArray.length; j++) {
      let difference = 0;
      if (boxesArray[j] === "1") {
        difference += Math.abs(i - j);
        answer[i] += difference;
      }
    }
  }
  return answer;
};
console.log(minOperations("110"));
